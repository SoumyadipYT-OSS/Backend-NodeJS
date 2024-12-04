async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans);
}


abcd();


/* Use cases in real world  */
// node mein jab DB
// fetch
// settimeout
// setinterval


// [concept aside]
// concurrency and parallelism
/*
     concurrency => JS mein sync code and async code ek saath process ho
raha tha ye hain concurrency

    parallelism => focus jaada karta hai different processors and unke cores
par kaam ko chalaane par.

    throttling => kisi code ko control karna number of executions.
*/