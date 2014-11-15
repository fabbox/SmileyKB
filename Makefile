clean:
	rm -f smileykb.zip

package: clean
	7z a -r smileykb.zip ./www/*
