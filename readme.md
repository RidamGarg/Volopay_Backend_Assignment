<br />
<div align="center">
  <h3 align="center">Backend Assignment</h3>
</div>

## Endpoints

- `/api/total_items`
- `/api/nth_most_total_item`
- `/api/percentage_of_department_wise_sold_items`
- `/api/get_monthly_sale`

### Steps to run the project

1. Install NPM packages

```sh
npm i
```

2. Create a ``.env` file, and add the mongodb url.

```sh
DB_URL = <MONGO_URL>
```

3. Seed the database

```sh
node importData.js
```

4. Run the server

```sh
node index.js
```

5. Import Postman Collection Using

```sh
https://api.postman.com/collections/26057099-7ec199e7-cc71-40c0-a133-757b5c60ee70?access_key=PMAT-01H2WXQT348XQ7ZY54ZN1VAJMR
```
