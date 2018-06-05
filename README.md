UniCHIP8 Tools
--------------

Miscellaneous tools for working with UniCHIP8 and Octo.


### makeString.js <string> [prefix]

Creates a null-terminated string of hex code to paste into .u8o source 
files.  Labels will be generated from a prefix ("string" if not 
provided) and the string itself

Example:

    ./makeString.js foo

    : string-foo
        0x66 0x6f 0x6f 0x00


### makeStrings.sh <filename> [prefix]

Runs makeString.js on each line in the specified file, optionally apply 
the specified prefix to each generated label.

