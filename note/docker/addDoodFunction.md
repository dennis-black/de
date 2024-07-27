# 正在運行的容器加入 DooD 的功能(尚未完成)
---
DooD(Docker-outside-of-Docker)，是因為 DinD(Docker-in-Docker) 巢狀的容器進行嵌套太過於麻煩而出現的，

- #### DinD (Docker-in-Docker)
    - **性能問題**：由於需要運行多層 Docker 守護進程，可能會導致性能下降。
    - **管理複雜性**：管理嵌套的 Docker 實例比直接與宿主機的 Docker 守護進程交互要複雜。
    - **安全考慮**：嵌套 Docker 使用的存儲和網絡模型可能會引入額外的安全風險。

- ### DooD (Docker-outside-of-Docker)
    - **簡化管理**：管理上更為簡單，因為所有操作都是針對單一的 Docker 守護進程進行。
    - **更好的性能**：不需要額外的 Docker 守護進程，減少了資源消耗，性能更佳。
    - **直接控制**：可以直接控制和監控宿主機上的容器(==優點同時也是缺點==)，方便實施監控和日誌收集。

windows 
```shell
docker run -d -v //./pipe/docker_engine://./pipe/docker_engine my-dood-container
```

unix and unix-like
```shell
docker run -d -v /var/run/docker.sock:/var/run/docker.sock my-dood-container
```