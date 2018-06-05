filename="${1}"
prefix="${2}"

if [ -f $filename ]; then
  while read p; do
    if [ "${p}" != "" ]; then
      if [ "${prefix}" == "" ]; then
        node makeString.js "${p}"
      else
        node makeString.js "${p}" "${prefix}"
      fi
    fi
  done < $filename

else
  echo "file not found"
fi
