# json file generator
- 動態產生json檔案
# 安裝指令
- npm i  -g jsonfile-generator
# 使用方式
- 新增一個名為Sample的資料夾
- 在Sample資料夾中建立兩個json檔
    -  master.json (主要的json資料)
    -  config.json (各個系統運作環境所需要的json資料)
- master.json檔加入以下json文字範例
```
{
    "FileNmae":"Master"
}
```
- config.json檔加入以下json文字範例
```
{
    "appsetting.Developmnet": {
        "target": "dev"
    },
    "appsetting.Staging": {
        "target": "staging",
        "hi":["fdsfsdfsdf"]
    },
    "appsetting.Production": {
        "target": "prod"
    }
}
```
- 與Sample資料夾同一層的command line界面裡輸入  jsonfile-generator -f Sample
- 最後在Sampple資料夾裡會產生一個Output資料夾，裡面會有三個json檔
    - Development.json
    - Staging.json
    - Production.json