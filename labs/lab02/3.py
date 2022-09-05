import pandas as pd

df = pd.read_csv('lab02\weather_data.txt', sep=',')

df.sort_values(by=['actual_precipitation'], inplace=True, ascending=False)

print('Highest days of \'actual percipitation\':')
print(df.head())
print()

df_july2014 = df.loc[df['date'].str.contains('2014-7')]
avg_max_temp = df_july2014['actual_max_temp'].mean()

print('Average actual max temp for July 2014:')
print(avg_max_temp, 'degrees')
print()

actual_max_temp_is_record_max_temp = df.loc[df['actual_max_temp'] == df['record_max_temp']]
print('actual_max_temp is also record_max_temp')
print(actual_max_temp_is_record_max_temp.head())
print()

totalRain = df.loc[df['date'].str.contains('2014-10')]['actual_precipitation'].sum()
print('Total Rain for October 2014')
print(totalRain)
print()

below60_and_above_90 = df.loc[(df['actual_min_temp'] < 60) & (df['actual_max_temp'] > 90)]
print('Below 60 and above 90 on the same day:')
print(below60_and_above_90.head())
print()