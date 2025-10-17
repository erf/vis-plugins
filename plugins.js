const plugins = [
	{
		"name": "vis-backspace",
		"repo": "https://github.com/milhnl/vis-backspace",
		"desc": "remove backspaces with alignment to tabwidth, like vim's softtabstop"
	},
	{
		"name": "vis-backup",
		"repo": "https://github.com/hucal/vis-backup",
		"file": "backup",
		"desc": "make backups of current files before saving"
	},
	{
		"name": "vis-bpts",
		"repo": "https://codeberg.org/shitpostalotl/vis-bpts",
		"desc": "insert mode using bullet-points for personal note taking"
	},
	{
		"name": "vis-bundle",
		"repo": "https://repo.or.cz/vis-bundle.git",
		"desc": "install (and periodically update) vis plugins from Git repos"
	},
	{
		"name": "vis-build",
		"repo": "https://gitlab.com/muhq/vis-build",
		"desc": "asynchronously run (build) commands"
	},
	{
		"name": "vis-commentary",
		"repo": "https://github.com/lutobler/vis-commentary",
		"desc": "automatic block comments for most languages"
	},
	{
		"name": "vis-complete-line",
		"repo": "https://repo.or.cz/vis-complete-line.git",
		"desc": "`<C-e>`, `<C-y>`, and `<C-x><C-l>`, like in vim"
	},
	{
		"name": "vis-cscope",
		"repo": "https://git.sr.ht/~emg/vis-cscope",
		"desc": "cscope support similar to vim's"
	},
	{
		"name": "vis-ctags",
		"repo": "https://github.com/kupospelov/vis-ctags",
		"desc": "add basic ctags support"
	},
	{
		"name": "vis-cursors",
		"repo": "https://github.com/erf/vis-cursors",
		"desc": "remember last cursor position per file"
	},
	{
		"name": "vis-editorconfig",
		"repo": "https://github.com/vktec/vis-editorconfig",
		"desc": "automatically parse and apply `.editorconfig` files"
	},
	{
		"name": "vis-exchange",
		"repo": "https://repo.or.cz/vis-exchange.git",
		"desc": "operator for swapping a pair of ranges"
	},
	{
		"name": "vis-fenced-insert",
		"repo": "https://repo.or.cz/vis-fenced-insert.git",
		"desc": "insert mode as that of traditional vi"
	},
	{
		"name": "vis-filetype-settings",
		"repo": "https://github.com/jocap/vis-filetype-settings",
		"file": "vis-filetype-settings",
		"desc": "set options automatically depending on filetype"
	},
	{
		"name": "vis-format",
		"repo": "https://github.com/milhnl/vis-format",
		"desc": "integrate vis with external formatters"
	},
	{
		"name": "vis-fzf-mru",
		"repo": "https://github.com/peaceant/vis-fzf-mru",
		"file": "fzf-mru",
		"desc": "open recently used files with fzf"
	},
	{
		"name": "vis-fzf-open",
		"repo": "https://git.sr.ht/~mcepl/vis-fzf-open",
		"desc": "open files with fzf"
	},
	{
		"name": "vis-go",
		"repo": "https://gitlab.com/timoha/vis-go",
		"file": "vis-go",
		"desc": "[Go](https://golang.org) development plugin"
	},
	{
		"name": "vis-goto-file",
		"repo": "https://repo.or.cz/vis-goto-file.git",
		"desc": "`gf` and `<C-w>f`, similar to vim's"
	},
	{
		"name": "vis-ins-completion",
		"repo": "https://github.com/jpaulogg/vis-ins-completion",
		"desc": "basic vim-like insert mode completion."
	},
	{
		"name": "vis-inotify",
		"repo": "https://gitlab.com/muhq/vis-inotify",
		"desc": "watch files using inotifywait"
	},
	{
		"name": "vis-highlight",
		"repo": "https://github.com/erf/vis-highlight",
		"desc": "highlight multiple Lua patterns with optional style"
	},
	{
		"name": "vis-jump",
		"repo": "https://git.sr.ht/~mcepl/vis-jump",
		"desc": "`gx` jump to the external link (with custom processor, if required), like in the vim’s netrw."
	},
	{
		"name": "vis-lockfiles",
		"repo": "https://gitlab.com/muhq/vis-lockfiles",
		"desc": "detect concurrent edits"
	},
	{
		"name": "vis-lspc",
		"repo": "https://gitlab.com/muhq/vis-lspc",
		"desc": "language server protocol client"
	},
	{
		"name": "vis-modelines",
		"repo": "https://github.com/lutobler/vis-modelines",
		"desc": "basic support for Vim modelines"
	},
	{
		"name": "vis-motsel",
		"repo": "https://repo.or.cz/vis-motsel.git",
		"desc": "create selections from motions"
	},
	{
		"name": "vis-open_rej",
		"repo": "https://git.sr.ht/~mcepl/vis-open_rej",
		"desc": "open the .rej file if present for the currently opened file."
	},
	{
		"name": "vis-options-backport",
		"repo": "https://github.com/milhnl/vis-options-backport",
		"desc": "make vis options available in lua for vis <=0.8"
	},
	{
		"name": "vis-outdated",
		"repo": "https://github.com/erf/vis-outdated",
		"desc": "keep up-to-date with a list of git repos"
	},
	{
		"name": "vis-pairs",
		"repo": "https://repo.or.cz/vis-pairs.git",
		"desc": "textobjects and motions for delimited blocks"
	},
	{
		"name": "vis-parkour",
		"repo": "https://repo.or.cz/vis-parkour.git",
		"desc": "structured editing for Lisps"
	},
	{
		"name": "vis-plug",
		"repo": "https://github.com/erf/vis-plug",
		"desc": "a minimal plugin (and theme) manager for vis"
	},
	{
		"name": "vis-quickfix",
		"repo": "https://repo.or.cz/vis-quickfix.git",
		"desc": "most of vim's QuickFix commands"
	},
	{
		"name": "vis-shebang",
		"repo": "https://github.com/e-zk/vis-shebang",
		"desc": "set syntax based on file [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))"
	},
	{
		"name": "vis-smart-backspace",
		"repo": "https://github.com/ingolemo/vis-smart-backspace",
		"desc": "delete spaces at start of lines, like vim's softtabstop"
	},
	{
		"name": "vis-sneak",
		"repo": "https://github.com/erf/vis-sneak",
		"desc": "jump to a location specified by two characters "
	},
	{
		"name": "vis-spellcheck",
		"repo": "https://gitlab.com/muhq/vis-spellcheck",
		"desc": "syntax aware spellchecking"
	},
	{
		"name": "vis-super-shellout",
		"repo": "https://github.com/seifferth/vis-super-shellout",
		"file": "super-shellout",
		"desc": "an alternative way to insert output from arbitrary shell commands"
	},
	{
		"name": "vis-surround",
		"repo": "https://repo.or.cz/vis-surround.git",
		"desc": "operators for adding/changing/deleting block delimiters"
	},
	{
		"name": "vis-tables",
		"repo": "ssh://anon@thyssentishman.com/ptt",
		"home": "https://www.thyssentishman.com/git/ptt/log.html",
		"desc": "an editor agnostic plain text table formatter with bindings for vis"
	},
	{
		"name": "vis-title",
		"repo": "https://github.com/erf/vis-title",
		"desc": "set terminal title to current file"
	},
	{
		"name": "vis-tmux-repl",
		"repo": "https://github.com/maciejjan/vis-tmux-repl",
		"file": "tmux-repl",
		"desc": "send text from vis to another tmux pane (e.g. a read-eval-print loop)"
	},
	{
		"name": "vis-toggler",
		"repo": "https://repo.or.cz/vis-toggler.git",
		"desc": "improved `<C-a>`/`<C-x>`, `~`, `g~`, `gu`, and `gU`"
	},
	{
		"name": "vis-ultisnips",
		"repo": "https://github.com/machinedgod/vis-ultisnips",
		"desc": "snippet plugin. Supports both SnipMate and UltiSnips, however has limited support for latter."
	},
	{
		"name": "vis-tasks",
		"repo": "https://github.com/mpolitzer/vis-tasks",
		"desc": "a simple todo list manager"
	},
	{
		"name": "vis-tabautoconf",
		"repo": "https://github.com/Nomarian/vis-tab-autoconf",
		"desc": "Inherits tab settings from current file"
	},
	{
		"name": "vis-remove-trailing-whitespace",
		"repo": "https://github.com/Nomarian/vis-remove-trailing-whitespace",
		"desc": "Remove trailing whitespace on file save event"
	},
	{
		"name": "vis-resetconf",
		"repo": "https://github.com/Nomarian/vis-resetconf",
		"desc": "Command to reset configuration to the default"
	},
	{
		"name": "vis-info",
		"repo": "https://github.com/Nomarian/vis-info",
		"desc": "Command announces state"
	}
]
