//
//  Copyright (c) 2021. falseUtopia All rights reserved.
//      Licensed under BSD license
//
//  https://gitee.com/falseutopia/di.fm-utools-plugin
//

window.exports = {
    "di.fm": {
        mode: "none",  // 用于无需 UI 显示，执行一些简单的代码

        args: {
            // 进入插件时调用
            enter: (action) => {

                window.utools.hideMainWindow()
                window.utools.outPlugin()

                console.log('插件装配完成')

                window.utools.ubrowser
                    .device('HUAWEI Mate30')
                    .goto('https://mp.music.163.com/5c8764e4ff3225d6738f615c/index.html?channe1Id=1060')
                    //.devTools()
                    .run();

            }
        }
    }
}
