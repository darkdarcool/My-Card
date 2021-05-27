function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};
export function sp(str: string){
	for(let i = 0; i < str.length; i++){
		sleep(30);
  	process.stdout.write(str[i]);
	};
};