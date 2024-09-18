# trabalhando com git 
para o conhecimento geral : https://roadmap.sh/git-github
## Se nunca usou usou o git:
provavelmente que tenha que baixar o git bash: 
no git Bash coloque 
```
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

```
ou baixe o github desktop e loge na sua conta 
mas acho que tera que baixar o git bash de qualquer jeito 

## baixando o arquivo para o seu computador: 
va no github: e copie o link do arquivo nele 
![image](https://github.com/user-attachments/assets/16511d0c-1eb8-4103-818f-7cc7b13fe0d8)
no terminal digite:
```
git clone LINKDOGITHUB
```
## criar uma branch
você ira usar o mesmo mecanismo de transitar entre as branchs a unica diferença 
```
git checkout -b NOMEDASUABRANCH
```
## codar : trabalhe como se fosse um programa qualquer 
para testar tem um arquivo chamado git.branch.js altere a variavel const teste = 0 para o seu nome 
## salvar
no vs code : você pode simplemente usar o controlede de codigo
![image](https://github.com/user-attachments/assets/8696c4f2-bd08-40ff-8cb1-496496ea450c)
mas de forma generica no terminal :
```
git add .
git commit -m "O TITULO DA MODIFICAÇÂO"
git push 
```
*os commits já possuem uma convenção no começo dos titulos que recomenda-se seguir: https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

# teste se não tem nenhum bug  
## ir para a banch principal :
a banch principal se não foi editado tem 3 nomes possiveis master / main / origin
no nosso caso é master
```
git checkout master
```
quando estamos condando sozinhos geralmente o seu codigo sempre estara atualizado  de acordo com a main mas codeando em grupo pode acontençer da banch principal no seu computador estar desatualizada
então teremos que atualizarmos as mudanças 
```
git pull
```
## na branch principal iremos adicionar nossas modificações 
iremos fazer o merge 
```
git merge NOMEDASUABANCH
```
com isso vai gerar as mudanças que teram que ser comparadas com as modificações de entradas e de saida acontece principalmente quando se tem alterações nas funções no vs code voçe ira comparara dois codigo e vera as linha em que tem as mudanças 
# teste para com npm run start para ver se esta tudo funcionado 

depois 
```
git push 
```
se tudo der certo voçe altera a linha em produção este sera o codigo que todo mundo ira ver  


