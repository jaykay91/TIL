# CSS 변수

## 변수 선언

--variable-name: value

## 변수 사용

property: var(--variable-name)

## 예제

```css
/* 전역 변수 */
:root {
  --my-color: red;
}

#selector {
  color: var(--my-color);
}

/* 지역 변수 */
/* 해당 범위 안에서만 사용할 수 있다 */
.selector {
  --my-color: red;
  color: var(--my-color);
}
```
