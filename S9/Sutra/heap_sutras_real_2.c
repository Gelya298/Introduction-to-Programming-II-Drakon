//(* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * )
//( Heap.Ñ      hscool sutra                                      c )
//(                                                                        )
//( Heap sorting -- timing is _always_ .LE. N*log N                        )
//( * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *)

//Program Heap(Input,Output);

#include <stdio.h>

#define N_MAX 10

typedef int TElement;
int  iNum=0,i,j;
TElement  elTemp;
TElement  elA[N_MAX]; //{ Source array, tree and result }


int FixTree(int iFrom,int iTo)
{
	TElement  elTop,elLeft,elRight;
	int  iFromTwice;

 	elTop=elA[iFrom];

	while(1) {
 		iFromTwice=iFrom*2;
 		if (iFromTwice > iTo) break; 
 		else {
			elLeft=elA[iFromTwice];
			if (iFromTwice==iTo) { elRight=elLeft; } else  { elRight=elA[iFromTwice+1]; }

			if ((elRight>elTop) && (elRight>elLeft)) { elA[iFrom]=elRight;  iFrom=iFromTwice+1;  } 
			else if (elLeft > elTop ) { elA[iFrom]=elLeft;   iFrom=iFromTwice; } 
			else break; 
 		}
	}
 	elA[iFrom]=elTop;
}

void main (int argc, char *argv []) 
{
  printf("\n");
  printf("Heap.  Array sorting by tree building.\n");

//  { Read unsorted array   }
  char str[3];
  while (iNum < N_MAX-1) {
    if(scanf("%s", str)<=0)break;
    elA[++iNum] = atoi(str);
  } 
  
  
// { Build a sorting tree  }
  for ( i= iNum >> 1;i>=1;i--) {  FixTree(i,iNum);

  printf("* %d %d: ",i,iNum);
  for (j=1; j < iNum; j++)  { printf("%d ",elA[j]); }
  printf("%d \n",elA[iNum]);

  }



//  { Display the result    }
  printf("* UnSorted array *\n  ");
  for (i=1; i< iNum; i++)  { printf("%d ",elA[i]); }
  printf("%d \n",elA[iNum]);



// { Convert tree to array }
  for (i=iNum; i>=2; i-- ) 
  { 
	elTemp=elA[1];
	elA[1]=elA[i];
	elA[i]=elTemp;
	FixTree(1,i-1);
  printf("* ");
  for (j=1; j< iNum; j++)  { printf("%d ",elA[j]); }
  printf("%d \n",elA[iNum]);
  }

//  { Display the result    }
  printf("* Sorted array *\n  ");
  for (i=1; i< iNum; i++)  { printf("%d ",elA[i]); }
  printf("%d \n",elA[iNum]);
  printf("P.S. Thank you for using our software.\n");

}
