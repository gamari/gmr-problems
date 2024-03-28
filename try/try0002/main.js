/**
 * 問題
 * 
 */

/** ランダムに1～4秒かかるfetch処理。 */
async function fetchMock() {
    const random = Math.random(1, 4);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(random * 1000);
        }, random * 1000);
    });
}

async function main() {
    // 直列的
    const startMills = new Date().getTime();
    
    // TODO fetch関数を3つ呼び出してください。   
    const result1 = await fetchMock();
    const result2 = await fetchMock();
    const result3 = await fetchMock();

    const endMills = new Date().getTime();

    console.log([result1, result2, result3]);
    console.log(endMills - startMills + 'ms')


    // 並列的
    const startMills2 = new Date().getTime();

    // TODO fetch関数を3つ同時に呼び出してください。
    const results = await Promise.all([fetchMock(), fetchMock(), fetchMock()]);

    const endMills2 = new Date().getTime();

    console.log(results);
    console.log(endMills2 - startMills2 + 'ms')
}

main();