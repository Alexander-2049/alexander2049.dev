import React from 'react';

const DownloadCode = () => {
  return (
<code>
<pre style={{fontSize: 0, color: "#00000000"}}>
{`
#include <iostream>
#include <stdlib.h>     /* srand, rand */
#include <time.h>       /* time */

using namespace std;

void fillArrayManually(float* arr, int length);
void fillArrayAutomatically(float* arr, int length);
void fillArrayAutomatically(int* arr, int length);
int getRandomIntInRange(int min, int max);
float getRandomFloatInRange(float min, float max);
void print2DIntArray(int* arr, int length);
float getSumOfNegativeElements(float* arr, int length);
int getSumOfNegativeElements(int *arr, int length);
int getProductBetweenMinMax(int* arr, int length);
void bubbleSort(int* arr, int length);
void compressArray(int* arr, int length);
void compressArrayInRange(int* arr, int length);
void compressArrayInRange(int* arr, int length, int min, int max);

int main() {
	srand(static_cast<unsigned int>(time(0)));

	int length;
	cout << "Enter array length: ";
	cin >> length;

	int* arr = new int[length];
	fillArrayAutomatically(arr, length);

	print2DIntArray(arr, length);
	cout << "getSumOfNegativeElements(arr, length) >> " << getSumOfNegativeElements(arr, length) << endl;
	cout << "getProductBetweenMinMax(arr, length) >> " << getProductBetweenMinMax(arr, length) << endl;

	bubbleSort(arr, length);
	print2DIntArray(arr, length);

	compressArrayInRange(arr, length);
	print2DIntArray(arr, length);

	return 0;
}

void fillArrayManually(float* arr, int length) {
	cout << "Enter array numbers:" << endl;
	for (int i = 0; i < length; i++)
	{
		cout << "[" << i + 1 << "] > ";
		cin >> arr[i];
	}
}

// put in the beginning of main()
// srand(static_cast<unsigned int>(time(0)));
void fillArrayAutomatically(float* arr, int length) {
	float min, max;
	
	cout << "Define numbers range: " << endl;
	cout << "Enter min. value > ";
	cin >> min;
	cout << "Enter max. value > ";
	cin >> max;

	for (int i = 0; i < length; i++)
		arr[i] = getRandomFloatInRange(min, max);
}

void fillArrayAutomatically(int* arr, int length) {
	int min, max;

	cout << "Define numbers range: " << endl;
	cout << "Enter min. value > ";
	cin >> min;
	cout << "Enter max. value > ";
	cin >> max;

	for (int i = 0; i < length; i++)
		arr[i] = getRandomIntInRange(min, max);
}

int getRandomIntInRange(int min, int max) {
	int result = (rand() % (max - min + 1) + min);
	return result;
}

float getRandomFloatInRange(float min, float max) {
	float range = max - min;
	float randomFraction = (static_cast<float>(rand()) / RAND_MAX);  // Generate a random fraction between 0 and 1
	float result = (randomFraction * range) + min;       // Scale and shift the fraction to fit the range
	return result;
}

void print2DIntArray(int* arr, int length) {
	cout << "int Array(";
	for (int i = 0; i < length; i++) {
		cout << arr[i];

		if (i + 1 < length)
			cout << ", ";
	}
	cout << ")" << endl;
}

// Calculate sum of negative elements.
float getSumOfNegativeElements(float* arr, int length) {
	float sum = 0;
	for (int i = 0; i < length; i++)
		if (arr[i] < 0)
			sum += arr[i];
	return sum;
}

// Calculate sum of negative elements.
int getSumOfNegativeElements(int* arr, int length) {
	int sum = 0;
	for (int i = 0; i < length; i++)
		if (arr[i] < 0)
			sum += arr[i];
	return sum;
}

// Calculate product of elements that are located between minimum and maximum element.
int getProductBetweenMinMax(int* arr, int length) {
	if (length < 3) return 0;
	int product = 1;

	int indexMin = 0;
	int valueMin = arr[0];

	int indexMax = 0;
	int valueMax = arr[0];

	for (int i = 1; i < length; i++)
	{
		if (arr[i] < valueMin) {
			valueMin = arr[i];
			indexMin = i;
		}
		if (arr[i] > valueMax) {
			valueMax = arr[i];
			indexMax = i;
		}
	}

	cout << "valueMin: " << valueMin << endl;
	cout << "valueMax: " << valueMax << endl;

	if (indexMin > indexMax) {
		int temp = indexMin;
		indexMin = indexMax;
		indexMax = temp;
	}

	for (int i = indexMin + 1; i < indexMax; i++)
		product = product * arr[i];

	return product;
}

void bubbleSort(int* arr, int length)
{
	int i, j;
	bool swapped;
	for (i = 0; i < length - 1; i++) {
		swapped = false;
		for (j = 0; j < length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr[j], arr[j + 1]);
				swapped = true;
			}
		}

		if (swapped == false)
			break;
	}
}

// "Compress" array. Remove elements that have absolute value greater than 1.
// Fill with 0 "free" elements in the end of array.

void compressArray(int* arr, int length) {
	int leftOffset = 0;

	for (int i = 0; i < length; i++)
		if (abs(arr[i]) <= 1)
			arr[leftOffset++] = arr[i];

	for (int i = leftOffset; i < length; i++)
		arr[i] = 0;
}

// "Compress" array. Remove all elements with value in range [a,b].
// Fill with 0 "free" elements in the end of array.
void compressArrayInRange(int* arr, int length) {
	int min, max;
	cout << "Enter compress range:" << endl;
	cout << "min > ";
	cin >> min;
	cout << "max > ";
	cin >> max;

	int leftOffset = 0;

	for (int i = 0; i < length; i++)
		if (arr[i] >= min && arr[i] <= max)
			arr[leftOffset++] = arr[i];

	for (int i = leftOffset; i < length; i++)
		arr[i] = 0;
}

void compressArrayInRange(int* arr, int length, int min, int max) {
	int leftOffset = 0;

	for (int i = 0; i < length; i++)
		if (arr[i] >= min && arr[i] <= max)
			arr[leftOffset++] = arr[i];

	for (int i = leftOffset; i < length; i++)
		arr[i] = 0;
}

`}  
</pre>
</code>
  );
};

export default DownloadCode;