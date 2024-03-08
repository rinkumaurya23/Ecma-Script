for (let i=0;i<10; i++){  // this is global =>var 

    setTimeout(() => {
        console.warn(i)
    }, 2000);
}