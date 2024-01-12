import React from 'react';

const DownloadCode = () => {
  return (
<code>
<pre style={{fontSize: 0, color: "#00000000"}}>
{`
#include <iostream>
#include <time.h>
#include <iomanip>

using namespace std;

void fillArrayAuto(int** arr, int rows, int columns);
void fillArrayManually(int** arr, int rows, int columns);
int getRandomNumberInRange(int min, int max);
void print2DArrayWithSums(int** arr, int rows, int columns);

// Calculate sum of elements in rows that have no negative elements.
int main() {
	int rows, columns;
	int chosen_option;
	srand(static_cast<unsigned int>(time(0)));

	cout << "Enter amount of rows: ";
	cin >> rows;
	cout << "Enter amount of columns: ";
	cin >> columns;

	int** arr = new int* [rows];
	for (int i = 0; i < rows; i++)
		arr[i] = new int[columns];

	cout << "Choose optiom: " << endl;
	cout << "1. Fill array manually." << endl;
	cout << "2. Fill array automatically." << endl;
	cout << "Enter your choice (1 or 2): > ";
	cin >> chosen_option;

	switch (chosen_option) {
		case 1:
			fillArrayManually(arr, rows, columns);
			break;
		case 2:
			fillArrayAuto(arr, rows, columns);
			break;
	}

	cout << "Calculating sums of non-negative rows..." << endl;
	cout << endl;
	print2DArrayWithSums(arr, rows, columns);
	cout << endl;

	for (int i = 0; i < rows; i++)
		delete[] arr[i];
	delete[] arr;

	return 0;
}

void fillArrayAuto(int** arr, int rows, int columns) {
	int min, max;
	cout << "Enter minimal possible number: ";
	cin >> min;
	cout << "Enter maximal possible number: ";
	cin >> max;
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < columns; j++)
		{
			arr[i][j] = getRandomNumberInRange(min, max);
		}
	}
}

void fillArrayManually(int** arr, int rows, int columns) {
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < columns; j++)
		{
			cout << "arr[" << i << "][" << j << "] = ";
			cin >> arr[i][j];
		}
	}
}

int getRandomNumberInRange(int min, int max) {
	int result = (rand() % (max - min + 1) + min);
	return result;
}

void print2DArrayWithSums(int** arr, int rows, int columns) {
	if (rows <= 0 || columns <= 0) { 
		cout << "Empty array" << endl;
		return;
	}

	// Drawing top line
	cout << "        ";
	for (int j = 0; j < columns; j++) {
		cout << "======";
	}
	cout << "=" << endl;

	int rowSum;
	int totalSum = 0;
	for (int i = 0; i < rows; i++)
	{
		rowSum = 0;
		cout << setw(5) << i + 1 << ": |";
		for (int j = 0; j < columns; j++)
		{
			cout << setw(6) << arr[i][j];

			if (rowSum >= 0 && arr[i][j] >= 0) {
				rowSum += arr[i][j];
			}
			else {
				rowSum = -1;
			}
		}

		if (rowSum < 0) {
			cout << " |" << endl;
		}
		else {
			cout << " | = " << rowSum << endl;
			totalSum += rowSum;
		}
	}

	// Drawing bottom line
	cout << "        ";
	for (int j = 0; j < columns; j++) {
		cout << "======";
	}
	cout << "=" << endl;
	cout << "           ";
	for (int j = 0; j < columns; j++) {
		cout << "      ";
	}
	cout << "= " << totalSum << endl;
}
`}  
</pre>
</code>
  );
};

export default DownloadCode;