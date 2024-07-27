# DE 的 Neovim configuration（v0.7.0 以上）
---
1. 如果自己的家目錄下沒有 “.config” 目錄，建立一個
2. 在 “.config” 目錄下建立一個目錄 “nvim”
3. 在 nvim 目錄下建立一個 “init.lua” 檔案，以及一個 “plugin” 目錄 
4. 檔案架構如下
    ```
    .config
    └── nvim
       ├── init.lua
       └── plugin
           └── packer_compiled.lua
    ```

5.  將下列設定檔複製到 init.lua
    ```lua
    vim.cmd("let g:netrw_liststyle = 3")

    local opt = vim.opt

    opt.number = true

    opt.cursorline = true

    vim.o.mouse = "a"

    local ensure_packer = function()

      local fn = vim.fn

      local install_path = fn.stdpath('data') .. '/site/pack/packer/start/packer.nvim'

      if fn.empty(fn.glob(install_path)) > 0 then

        fn.system({'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path})

        vim.cmd [[packadd packer.nvim]]

        return true

      end

      return false

    end

    local packer_bootstrap = ensure_packer()

    require('packer').startup(function(use)

      use 'wbthomason/packer.nvim'

      use 'nvim-tree/nvim-tree.lua'

      use 'nvim-tree/nvim-web-devicons'

      use 'tomasiser/vim-code-dark'

      use {

        'nvim-treesitter/nvim-treesitter',

        run = ':TSUpdate'

      }

      if packer_bootstrap then

        require('packer').sync()

      end

    end)

    require('nvim-tree').setup {

      view = {

        width = 30,

        side = 'left',

      },

      update_focused_file = {

        enable = true,

      },

    }

    local function open_nvim_tree(data)

      local directory = vim.fn.isdirectory(data.file) == 1

      if not directory then

        return

      end

      vim.cmd.cd(data.file)

      require("nvim-tree.api").tree.open()

    end
      

    require('nvim-treesitter.configs').setup {

      sync_install = false,

      highlight = {

        enable = true,

        additional_vim_regex_highlighting = false,

      },

    }

    vim.cmd [[colorscheme codedark]]
    ```

6. 進入 nvim 編輯器下命令介面，輸入 “:PackerSync”，若沒有報錯就等待相關依賴安裝完成，如果顯示 “PackerSync 不是編輯器命令” 等字樣，表示沒有安裝 “packer.nvim” ，輸入以下指令進行安裝，並重新執行第 6 點
    ```shell
    git clone --depth 1 https://github.com/wbthomason/packer.nvim\
      ~/.local/share/nvim/site/pack/packer/start/packer.nvim
    ```
