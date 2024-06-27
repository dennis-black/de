# 正在運行的容器加入 DinD 的功能(尚未完成)
---
假設現在已經有一個正在運行中的 Ubuntu 的容器，我們希望在這容器再一次地安裝 docker ，我們必須確認電腦中正在使用的容器執行時有 

```shell
 apt install iptables fuse-overlayfs
 apt install docker.io
 dockerd & #執行容器的內部守護進程
```

若執行容器的守護進程時出現報錯，刪除守護進程並且重新執行 docker 守護進程
```shell
killall dockerd #停止容器中的docker
dockerd & #執行docker的守護進程
```


