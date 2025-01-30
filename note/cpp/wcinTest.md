---
title: cpp wcin 中文輸入測試
tags: [測試]

---

# C++ 中文輸入測試

## 範例程式碼1（尋找水果價格）
```cpp
#include <iostream>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    wcin.imbue(locale("zh_TW.UTF-8"));
    wcout.imbue(locale("zh_TW.UTF-8"));
 
    wstring fruits[5] = {L"蘋果", L"香蕉", L"櫻桃", L"榴槤", L"蓮霧"};
    int prices[5] = {15, 20, 2, 40, 10};
 
    wstring fruitName;
    bool found=found;
   
    wcout << L"請輸入水果名稱: ";
    wcin >> fruitName;
    
    for(int i=0;i<5;i++)
    {
        if(fruitName.compare(fruits[i])==0)
        {
            wcout << L"價格為" << prices[i] << L"元" << endl;
            found = true;
        }
    }
 
    if (!found)
    {
        wcout << L"找不到對應的水果價格!" << endl;
    }
 
    return 0;
}
```

### Ubuntu 執行步驟 
1. 使用指令：`locale -a | grep zh_TW.UTF-8` 查看該系統目前有安裝的語言環境是否有包含 zh_TW.UTF-8，如果已經有 zh_TW.UTF-8 的語言環境就省略以下步驟直接編譯該範例程式碼並執行 
2. 使用指令： `sudo apt update && sudo apt install -y language-pack-zh-hant` 更新之後安裝中文語言包，其中 “zh-hant” 係指繁體（t）的漢語（han）中文（zh）
3. 使用指令：`sudo locale-gen zh_TW.UTF-8` 建立 zh_TW.UTF-8 的語言環境
4. 再次執行指令：`locale -a | grep zh_TW.UTF-8` 檢查 zh_TW.UTF-8 的語言環境是否已經成功建立，若能夠在 `locale -a` 的列出的項目中找到 zh_TW.UTF-8 表示語言環境已經成功建立
5. 在成功建立 zh_TW.UTF-8 語言環境之後就能夠編譯範例程式碼並執行

### Windows 程式碼改寫
1. 註解部分程式碼並且更正程式碼如下，需要為標準輸入與標準輸出特別設定編碼模式，如程式碼中的選擇1與選擇2，執行時選定其中一組並註解掉另外一組
```cpp
#include <iostream>
#include <fcntl.h>
using namespace std;

int main()
{
    // 選擇1
    _setmode(_fileno(stdout), _O_U16TEXT);
    _setmode(_fileno(stdin), _O_U16TEXT);
    // 選擇2
    // _setmode(_fileno(stdout), _O_U8TEXT);
    // _setmode(_fileno(stdin), _O_U16TEXT);
    
    // 結論：輸入時必須使用 U16 的編碼
 
    wstring fruits[5] = {L"蘋果", L"香蕉", L"櫻桃", L"榴槤", L"蓮霧"};
    int prices[5] = {15, 20, 2, 40, 10};
 
    wstring fruitName;
    bool found=found;
   
    wcout << L"請輸入水果名稱: ";
    wcin >> fruitName;
    
    for(int i=0;i<5;i++)
    {
        if(fruitName.compare(fruits[i])==0)
        {
            wcout << L"價格為" << prices[i] << L"元" << endl;
            found = true;
        }
    }
 
    if (!found)
    {
        wcout << fruitName << endl; // 檢查能不能正常顯示使用者所輸入的內容
        wcout << L"找不到對應的水果價格!" << endl;
    }
    return 0;
}

```
執行結果：
```
PS C:\Users\dennis\testField> g++ .\test.cpp
PS C:\Users\dennis\testField> .\a.exe
請輸入水果名稱: 蘋果
價格為15元
PS C:\Users\dennis\testField> .\a.exe
請輸入水果名稱: 香蕉
價格為20元
PS C:\Users\dennis\testField> .\a.exe
請輸入水果名稱: 蓮霧
價格為10元
PS C:\Users\dennis\testField> .\a.exe
請輸入水果名稱: 租大鴿  
租大鴿
找不到對應的水果價格!
PS C:\Users\dennis\testField> 
```
2. 編譯並執行

### MacOS 程式碼改寫
1. 註解部分程式碼並且更正程式碼如下，在 wcin 與 wcout 分別設定使用了 code convert 支援寬字元且於輸入與輸出皆使用 utf8 的編碼方式
```cpp
#include <iostream>
#include <codecvt>
using namespace std;

int main()
{
    locale utf8_locale(locale(), new codecvt_utf8<wchar_t>());
    std::wcout.imbue(utf8_locale);
    std::wcin.imbue(utf8_locale);
 
    wstring fruits[5] = {L"蘋果", L"香蕉", L"櫻桃", L"榴槤", L"蓮霧"};
    int prices[5] = {15, 20, 2, 40, 10};
 
    wstring fruitName;
    bool found=found;
   
    wcout << L"請輸入水果名稱: ";
    wcin >> fruitName;
    
    for(int i=0;i<5;i++)
    {
        if(fruitName.compare(fruits[i])==0)
        {
            wcout << L"價格為" << prices[i] << L"元" << endl;
            found = true;
        }
    }
 
    if (!found)
    {
        wcout << fruitName << endl; // 檢查能不能正常顯示使用者所輸入的內容
        wcout << L"找不到對應的水果價格!" << endl;
    }
    return 0;
}
```
執行結果：
```
~/dennisSync/DE/coding/testField/cpp_wideChar g++ test.cpp                               
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out                                     
請輸入水果名稱: 蘋果
價格為15元
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out                                     
請輸入水果名稱: 香蕉
價格為20元
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out                                     
請輸入水果名稱: 蓮霧
價格為10元
~/dennisSync/DE/coding/testField/cpp_wideChar 
```

2. 編譯並執行

---
## 範例程式碼2（w_char 寬字元陣列輸出串接， wchar_t.cpp）
```cpp
#include <iostream>
using namespace std;

int main() 
{
    ios::sync_with_stdio(false);
    wcin.imbue(locale("zh_TW.UTF-8"));
    wcout.imbue(locale("zh_TW.UTF-8"));

    wchar_t otani[]=L"大谷翔平";
    wchar_t baseball_1=L'棒', baseball_2=L'球';
    wchar_t name[10];
    
    wcout << L"請輸入你的名字:";
    wcin >> name;
    
    wcout << name << L"最欣賞的";
    wcout << baseball_1 << baseball_2;
    wcout << L"選手是";

    for(int i=0;i<wcslen(otani); i++)
        wcout << otani[i];

    wcout << endl;
    return 0;
}
```
### windows 程式碼改寫
```cpp
#include <iostream>
#include <fcntl.h> // for _O_U16TEXT
using namespace std;

int main() 
{
    // ios::sync_with_stdio(false);
    // wcin.imbue(locale("zh_TW.UTF-8"));
    // wcout.imbue(locale("zh_TW.UTF-8"));
    _setmode(_fileno(stdout), _O_U16TEXT);
    _setmode(_fileno(stdin), _O_U16TEXT);

    wchar_t otani[]=L"大谷翔平";
    wchar_t baseball_1=L'棒', baseball_2=L'球';
    wchar_t name[10];
    
    wcout << L"請輸入你的名字:";
    wcin >> name;
    
    wcout << name << L"最欣賞的";
    wcout << baseball_1 << baseball_2;
    wcout << L"選手是";

    for(int i=0;i<wcslen(otani); i++)
        wcout << otani[i];

    wcout << endl;
    return 0;
}

```
執行結果：
```
PS C:\Users\dennis\testField> g++ .\wchar_t.cpp
PS C:\Users\dennis\testField> .\a.exe
請輸入你的名字:租大鴿  
租大鴿最欣賞的棒球選手是大谷翔平
PS C:\Users\dennis\testField>
```
### mac 程式碼改寫
```cpp
#include <iostream>
#include <codecvt>
using namespace std;

int main() 
{
    // ios::sync_with_stdio(false);
    // wcin.imbue(locale("zh_TW.UTF-8"));
    // wcout.imbue(locale("zh_TW.UTF-8"));
    locale utf8_locale(locale(), new codecvt_utf8<wchar_t>());
    std::wcout.imbue(utf8_locale);
    std::wcin.imbue(utf8_locale);

    wchar_t otani[]=L"大谷翔平";
    wchar_t baseball_1=L'棒', baseball_2=L'球';
    wchar_t name[10];
    
    wcout << L"請輸入你的名字:";
    wcin >> name;
    
    wcout << name << L"最欣賞的";
    wcout << baseball_1 << baseball_2;
    wcout << L"選手是";

    for(int i=0;i<wcslen(otani); i++)
        wcout << otani[i];

    wcout << endl;
    return 0;
}
```
執行結果：
```
~/dennisSync/DE/coding/testField/cpp_wideChar g++ wchar_t.cpp
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out
請輸入你的名字:租大鴿
租大鴿最欣賞的棒球選手是大谷翔平
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out
請輸入你的名字:租大🕊️
租大🕊️最欣賞的棒球選手是大谷翔平
```


---
## 範例程式碼3（wstring 與 w_char 輸出串接，wstring.cpp）
```cpp
#include <iostream>
using namespace std;

int main() 
{
    ios::sync_with_stdio(false);
    wcin.imbue(locale("zh_TW.UTF-8"));
    wcout.imbue(locale("zh_TW.UTF-8"));

    wstring otani=L"大谷翔平";
    wchar_t baseball_1=L'棒', baseball_2=L'球';
    wstring name;
    
    wcout << L"請輸入你的名字:";
    wcin >> name;
    
    wcout << name << L"最欣賞的";
    wcout << baseball_1 << baseball_2;
    wcout << L"選手是";

    for(int i=0;i<otani.length(); i++)
        wcout << otani[i];
        
    wcout << endl;
    return 0;
}
```

### windows 程式碼改寫
```cpp
#include <iostream>
#include <fcntl.h> // for _O_U16TEXT
using namespace std;

int main() 
{
    // ios::sync_with_stdio(false);
    // wcin.imbue(locale("zh_TW.UTF-8"));
    // wcout.imbue(locale("zh_TW.UTF-8"));
    _setmode(_fileno(stdout), _O_U16TEXT);
    _setmode(_fileno(stdin), _O_U16TEXT);

    wstring otani=L"大谷翔平";
    wchar_t baseball_1=L'棒', baseball_2=L'球';
    wstring name;
    
    wcout << L"請輸入你的名字:";
    wcin >> name;
    
    wcout << name << L"最欣賞的";
    wcout << baseball_1 << baseball_2;
    wcout << L"選手是";

    for(int i=0;i<otani.length(); i++)
        wcout << otani[i];
        
    wcout << endl;
    return 0;
}
```
執行結果：
```
PS C:\Users\dennis\testField> g++ .\wstring.cpp
PS C:\Users\dennis\testField> .\a.exe
請輸入你的名字:丹尼斯
丹尼斯最欣賞的棒球選手是大谷翔平
PS C:\Users\dennis\testField>
```

### mac 程式碼改寫
```cpp
#include <iostream>
#include <codecvt>
using namespace std;

int main() 
{
    // ios::sync_with_stdio(false);
    // wcin.imbue(locale("zh_TW.UTF-8"));
    // wcout.imbue(locale("zh_TW.UTF-8"));
    locale utf8_locale(locale(), new codecvt_utf8<wchar_t>());
    std::wcout.imbue(utf8_locale);
    std::wcin.imbue(utf8_locale);

    wstring otani=L"大谷翔平";
    wchar_t baseball_1=L'棒', baseball_2=L'球';
    wstring name;
    
    wcout << L"請輸入你的名字:";
    wcin >> name;
    
    wcout << name << L"最欣賞的";
    wcout << baseball_1 << baseball_2;
    wcout << L"選手是";

    for(int i=0;i<otani.length(); i++)
        wcout << otani[i];
        
    wcout << endl;
    return 0;
}
```
執行結果：
```
~/dennisSync/DE/coding/testField/cpp_wideChar g++ wstring.cpp
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out
請輸入你的名字:丹尼斯
丹尼斯最欣賞的棒球選手是大谷翔平
~/dennisSync/DE/coding/testField/cpp_wideChar ./a.out
請輸入你的名字:丹尼斯威爾史密斯
丹尼斯威爾史密斯最欣賞的棒球選手是大谷翔平
~/dennisSync/DE/coding/testField/cpp_wideChar       
```