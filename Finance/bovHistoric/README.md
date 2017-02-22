# Historic from Bovespa
.

## Keyspace Bovespa

```
create keyspace bovespa with replication = {'class':'SimpleStrategy', 'replication_factor':2};
```

 ## Tables
 
```
create table cotacoes (data text, codbdi text, codneg text, tpmerc int, nomres text, especi text, prazot text, modref text, preabe decimal, premax decimal, premin decimal, premed decimal, preult decimal, preofc decimal, preofv decimal, totneg int, quatot bigint, voltot decimal, preexe decimal, indopc int, datven text, fatcot bigint, ptoexe decimal, codisi text, dismes decimal, primary key (data, codneg))
```

and

```
  
```

## 

```

```
