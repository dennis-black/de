---
title: 利用 Google GCP 架設 VPN 伺服器（未完成）

---

# 利用 Google GCP 架設 VPN 伺服器（未完成）

## 建立 Google 帳號以及於 GCP 建立一個 instance
1. GCP 提供了三個月內 300 美元內免費使用的扣打，所以先建立一個 Google 帳號
2. 前往 GCP console，輸入基本資料以及簽帳卡/信用卡資料告訴 GCP 你不是機器人，除非之後有開啟自動扣款，否則 GCP 不會主動扣款
3. 在 GCP console 左邊的選單選項中找到 computer engine，建立一個 vm instance，**選擇你要的地區**，過程略。

### 參考配置
- 機器類型：N1
    - 自訂核心數：1
    - 自訂記憶體容量：2
- 架構： x86/64
- OS：UBUNTU 20.04
- 硬碟容量： 75 GiB
- HTTPS：
    - HTTP traffic: On
    - HTTPS traffic: On
    - Allow Load Balancer Health checks: On

以上配置每月29美元，如果只是要建立 VPN 伺服器其實有點效能過剩了，換句話說，開著三個月才87美元，剩下的扣打可以再多開幾個不同地方的機器，這樣就能夠切換不同地方的 VPN 了。

## 建立 VPN 伺服器
### 安裝 docker
1. 為 APT 倉庫加入 docker
    ```shell
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Add the repository to Apt sources:
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    ```
1. 從 APT 倉庫下載 docker
    ```shell
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
1. 用 Hello-world 容器測試 docker 是否成功安裝
    ```shell
    sudo docker run hello-world
    ```

參考 [docker 官方網站](https://docs.docker.com/engine/install/ubuntu/)

### 建立 openvpn 容器
1. 運行容器
    ```shell
    sudo docker run -d --name openvpn-as --cap-add=NET_ADMIN -p 943:943 -p 8443:443 -p 1194:1194/udp -v ~/docker/openvpn-as:/openvpn openvpn/openvpn-as
    ```
1. 進入容器
    ```shell
    sudo docker exec -it openvpn-as /bin/bash
     ```
1. 使用容器中的 sacli 工具重設密碼，用新密碼取代指令中的`your_password`
    ```shell
    sacli --user openvpn --new_pass your_password SetLocalPassword
    ```
1. 更新設定
    ```shell
    sacli start
    ```
1. 離開容器
    ```shell
    exit
    ```
參考 [openvpn 官方文件](https://openvpn.net/as-docs/docker.html#sign-in-as-an-administrator)

### 設定防火牆
...