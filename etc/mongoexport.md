# mongoexport

## 명령어

-h {host}  
-u {user}  
--authenticationDatabase {auth_db}

-d {use_db}  
-c {collection}

--limit {limit_count}  
--sort {json_str}  
--query {json_str}

-f {field1[,field2]}  
--type {string}  
-o {filename}

## 예제

### json record export

```bash
mongoexport \
-h {host} -u {user} \
--authenticationDatabase {auth_db} \
-d {use_db} -c {collection} \
-o {filenmae}
```

### csv record export

```bash
mongoexport \
-h {host} -u {user} \
--authenticationDatabase {auth_db} \
-d {use_db} -c {collection} \
-o {[name].csv} -f {field1[,field2]} --type csv
```
