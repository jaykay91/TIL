# Mysql

### DB 보기

```sql
SHOW DATABASES;
```

### DB 생성

```sql
CREATE DATABASE {dbname};
```

### 테이블 보기

```sql
SHOW TABLES;
```

### 테이블 생성

```sql
CREATE TABLE {table_name} (
	{column1} BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	{column2} DATETIME(3) NOT NULL,
    {column3} CHAR(4) NOT NULL,
    {column4} DOUBLE UNSIGNED NOT NULL,
    {column5} DOUBLE UNSIGNED NOT NULL,
    {column6} DOUBLE UNSIGNED NOT NULL,
	PRIMARY KEY({column1})
);
```

### 테이블 삭제

```sql
DROP TABLE {table_name};
```

### SELECT

```sql
SELECT * FROM {table_name};
SELECT {column1}, {column2}, ... FROM {table_name};
SELECT * FROM {table_name} WHERE {column1} = {some_value};
```

### INSERT

```sql
INSERT INTO {table_name} ({column1}, {column2}) VALUES ({some_value1}, {some_value2});
```

### UPDATE

```sql
UPDATE {table_nmae} SET {column1} = {some_value1} WHERE {column2} = {some_value2}
```

### DELETE

```sql
DELETE FROM {table_name} WHERE {column} = {some_value}
```
