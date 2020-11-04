var images = [
    "https://archiprofi.ru/upload/resize_cache/iblock/5bb/510_350_2/5bb6f7c9dfcc4fd6b1a507148c56dfc0.jpg",
    "https://archiprofi.ru/upload/resize_cache/iblock/afd/510_350_2/afd4c79d7845f408f5ac96653bd09df6.jpg",
    "https://archiprofi.ru/upload/resize_cache/iblock/4cd/510_350_2/4cd60ec5f30f3f15954f3e0c3df28edf.jpg",
    "https://archiprofi.ru/upload/resize_cache/iblock/1e8/510_350_2/1e85d1050f035711805129b30dbb00f8.jpg",
    "https://pm1.narvii.com/6935/3235ff37d73743692de6fc2b2ea5a81c8ad1a097r1-1152-1152v2_hq.jpg",
    "https://pm1.narvii.com/6935/5cef9f0c9b0b353cd7caaf860307dac9dc29c2e5r1-1152-1152v2_hq.jpg",
    "https://pm1.narvii.com/6935/ef752990b079d8d6562e206b665a74c645665b52r1-1000-667v2_hq.jpg",
    "https://pm1.narvii.com/6935/aec4192ad0cd75c651e78d2d1917276f0b2de736r1-1000-600v2_hq.jpg"
]
async function image_load(data, editor) {
    var image = await document.getElementById(editor);
    console.log(`${image}`)
    image.src = images[data]
}