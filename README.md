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

IMAGEM:
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


sudo docker pull python - fazer download de alguma imagem do hub e deix-la disponivel no ambiente
docker run -it python - executar com a imagem baizada pelo pull
docker run --help

sudo docker tag 6b362a9f73eb minhaimagem:minhatag  -renomear a imagem
docker rmi <imagem>

sudo docker system prune - remove todas as imagens e containers
docker run --rm <container> - um container pode ser automaticamente deletado apos sua utilização
docker cp - copiar arquivos
docker top <container> - verificar dados de execução
docker inspect <container> - informações de configurações
docker stats - verificar processos sendo executados em um container

DOCKER HUB
docker logout - remover conexão da maquina e o docker hub
docker build -t jennyads/nodeteste 
docker push jennyads/nodeteste - enviar imagem 
docker pull jennyads/nodeteste - download imagem
docker build -t jennyads/nodeteste:novaversao - atualizar imagem
docker build -t jennyads/nodeteste  - remover
docker run --name testando_imagem -p 3000:3000 -d jennyads/nodeteste -rodar

VOLUMES
docker run -d -p 80:80 --name phpmessages_container -v phpvolume:/var/www/html/messages --rm phpmessages  -rodar em volume nomeado (volume faz persistir dado e container)
docker volume ls  -listar volumes
docker run -d -p 80:80 --name phpmessages_container -v copyPath:/var/www/html/messages --rm phpmessages -bind mounts, mundanças são refletidas no diretório
docker volume create <nome> -criar volume manualmente 
docker run -d -p 80:80 --name phpmessages_container -v --rm phpmessages -volumes anônimos
docker volume inspect <nome> -inspecionar -ver informações
docker volume rm <nome> -remover volume
docker volume prune -remove todos os volumes
docker volume -d -p 80:80 --name phpmessages_container -v volumeleitura:/var/www/html:ro --rm phpmessages  -modo somente leitura

NETWORKS (forma de gerenciar a conexão do coker com outras plataformas ou entre containers)
Tipos de comunicação dos containers:
* externa: conexão com uma API de um servidor remoto;
* host: comunicação com a máquina que está executando o docker;
*Entre containers: comunicação que utiliza o driver bridge e permite a comunicação entre dois ou mais containers

docker network ls -listar
docker network create <nome> - criar uma rede
docker network create -d macvlan meumacvlan  - criar rede com padrão diferente
docker network rm <nome> - deletar

PROJETO 2:
docker build -t phpmessagescontainer .
docker login
docker run -d -p 80:80 phpmessagescontainer


PROJETO 3:
docker build -t flaskexterna .
docker run -d -p 5000:5000 --name flaskexternocontainer flaskexternaskexternocontainer
docker network prune - remover em quantidade não utilizadas

YAML: linguagem de serialização para configurar múltiplos containers  
- geralmente possui chaves e valores;

PROJETO 4:
DOCKER-COMPOSE
É uma ferramenta para rodar múltiplos containers;
docker-compose up -roda projeto
docker-compose down - encerra

PROJETO 5:
Orquestação é o ato de conseguir gerenciar e escalar os containers da nossa aplicação. Temos um serviço que rege sobre outros serviços, verificando se os mesmos estão funcionando como deveriam;
alguns serviços: docker swarn, kubernetes, apache mesos. 
Swarn - ferramenta do docker para orquestrar containers, podendo escalar horizontalmente os projetos (cluster).
node: máquina conectada ao swarm
node1:
ssh -i "node1.pem" ec2-user@ec2-3-145-2-180.us-east-2.compute.amazonaws.com
node2:
ssh -i "node1.pem" ec2-user@ec2-3-144-23-235.us-east-2.compute.amazonaws.com
node3:
ssh -i "node1.pem" ec2-user@ec2-3-145-93-45.us-east-2.compute.amazonaws.com

join:
sudo docker swarm join --token SWMTKN-1-3751zys9iybxu1kxeyjzy6nnpj3gyk3jbkbxzt8ptx6ye38g6u-a7e8mfun4bm1t8fjsefv0me86 3.145.2.180:2377
docker swarm join-toker manager    - mostra o comando, facilitando o acesso

AWS:
sudo yum update -y
sudo yum install docker
sudo service docker start
sudo docker ps
sudo usermod -a -G docker ec2-user
sudo docker info
sudo docker swarm init
sudo docker swarm leave -f
docker swarm init --advertise-addr 3.145.2.180
docker node ls
docker swarm join --token <TOKEN> <IP>:<PORTA>


sudo docker service create -p 80:80 --name nginxswarm nginx
docker servce create --name <nome> <imagem>
docker service create --name <NOME> --replicas <NUMERO> -p <PORTA> <IMAGEM>

docker service ls
docker service rm <nome>
docker container rm <NOME> -f -fica indisponivel muito rápido no node, pois o swarm restaura novamente pela orquestração
docker info
docker swarm leave  - desconectar/remover uma instância





```


