<h2>Comandos</h2>
```
docker run - iniciar container
docker stop <id ou names> - parar container
docker start <id> - reutilizar container
docker run -it ubuntu
docker run -it node
docker ps ou ls - vê o que está sendo executado no momento
docker ps -a -vê o histórico do que foi executado e que está sendo
flag -d (detached) - execução em background (para não precisar ficar com diversas abas de terminal aberto)
docker ryb nginx (servidor web)
docker stop <names>  -força a parar de rodar o container
dockek run -d nginx - rodar em background sem ocupar aba/terminal
docker run -d -p 80:80 nginx -expor a porta
docker run -d -p 80:80 --name nome_escolhido nginx
docker logs <id ou names> - verificar o que aconteceu em um container, as ultimas ações realizadas no container, serão exibidas no terminal
docker rm <id ou names> - remover container da máquina
docker rm <id ou names> -f -força para remover

Imagem:
docker run -d -p 80:80 --name meu_apache httpd -(apache disponibilizado no site https://hub.docker.com/_/httpd)
npm init -y -iniciar o node
npm install express -framework para acessa a aplicação no navegador
node app.js -rodar aplicação 
Dockerfile, cria um cash para cada camada: 
from - imagem base
workdir : diretório de aplicação
expose: porta de aplicação
copy: quais arquivos precisam ser copiados
docker build . <diretorio da imagem> -para executar a imagem é preciso fazer o build
docker run <imagem> -executar a imagem
docker run -d -p 3000:3000 50cb0dceca4b <imagem> -assim que executa imagem
docker run -d -p 3000:3000 --name meu_node 50cb0dceca4b  -renomear a imagem
*sempre que alterar o código da imagem tem que gerar o build novamente
docker run -d -p 3000:3000 --name meu_node2 9db8c18afe6c - tem que renomear com nome diferente pq dá conflito e indicar o novo id
```
