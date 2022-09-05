import pandas as pd
import plotly.express as px

df = pd.read_csv('lab02\weather_data.txt', sep=',')

fig = px.line(df, x='date', y=['actual_min_temp', 'actual_max_temp'], title='Weather Data')
fig.write_html('lineGraph.html')

fig = px.histogram(df, x='actual_precipitation', title='Actual Percipitation')
fig.write_html('histogram.html')