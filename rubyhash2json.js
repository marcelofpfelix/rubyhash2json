function rubyhash2json(str) {
  console.debug('rubyhash2json(str) function start');

  console.debug(str);
    // replace symbol {:symbol=> to {"symbol"=>
  str = str.replace(/(([{,]\s*)[:]([^>\s\[\]]+)|([{,]\s*)([0-9]+\.?[0-9]*))\s*=>/g, '$2$4"$3$5"=>');
  console.debug(`regex 1`);
  console.debug(str);
  // replace {,'a' to {,"a"
  str = str.replace(/([{,]\s*)'(.+?)'\s*=>/g, '$1"$2"=>');
  console.debug(`regex 2`);
  console.debug(str);
  // replace =>'a' to :"a"
  str = str.replace(/=>\s*'([^,}\s]+\s*)'/g, '=> "$1"');
  console.debug(`regex 3`);
  console.debug(str);
    // replace value {"symbol"=>:value to {"symbol"=>"value"
  str = str.replace(/([{,]\s*)(".+?"|[0-9]+\.?[0-9]*)\s*=>\s*:([^,}\s]+\s*)/g, '$1$2=>"$3"');
  console.debug(`regex 4`);
  console.debug(str);
    // replace array [:a, :b] to ["a","b"]
  str = str.replace(/([\[,]\s*):([^,\]\s]+)/g, '$1"$2"');
  console.debug(`regex 5`);
  console.debug(str);
    // replace nil to null
  str = str.replace(/=>nil/g, '=>null');
  console.debug(`regex 6`);
  console.debug(str);
    // replace => to :
  str = str.replace(/([{,]\s*)(".+?"|[0-9]+\.?[0-9]*)\s*=>/g, "$1$2:");
  console.debug(`regex 7`);
  console.debug(str);

  return str;
}
