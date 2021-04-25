// Lena Ebner - MMT-b 2019

export async function delay () {
  // console.log("in delay - waiting 200ms");
  return new Promise((resolve) => {
    setTimeout((resolve), 200)
  })
}
