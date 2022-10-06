from bokeh.plotting import figure, show, output_file
from bokeh.palettes import Dark2_3 as pallette
import numpy as np
from astropy import units as u


def real_grating(theta, d, N, w):
    wav = 550 * u.nm
    delta = 2 * np.pi * d * np.sin(theta) / wav
    delta = delta.decompose().value

    ideal = (np.sin(N * delta / 2) / np.sin(delta / 2)) ** 2
    x = (np.sin(theta) * np.pi * w / wav).decompose().value

    return ideal * np.sin(x) ** 2 / x ** 2


def ideal_grating(theta, d, N):
    wav = 550 * u.nm
    delta = 2 * np.pi * d * np.sin(theta) / wav
    delta = delta.decompose().value

    return (np.sin(N * delta / 2) / np.sin(delta / 2)) ** 2


theta = np.linspace(-15, 15, 1000) << u.degree
lpm = 220 / u.mm
d = 1 / lpm

p = figure(width=720, height=480)
p.title.text = "Click on legend entries to hide the corresponding lines"
I = real_grating(theta, d, 1, d / 2)
p.line(
    theta,
    I,
    line_width=3,
    color=pallette[0],
    legend_label="1 line",
    line_dash="dashed",
)

color_indices = [1, 2]
lines = [2, 5]
for idx, N in zip(color_indices, lines):
    I = ideal_grating(theta, d, N)
    I /= I.max()
    p.line(
        theta,
        I,
        line_width=3,
        color=pallette[idx],
        line_dash="dashed",
        legend_label=f"{N} lines (ideal)",
    )

for idx, N in zip(color_indices, lines):
    I = real_grating(theta, d, N, d / 2)
    I /= I.max()
    p.line(theta, I, line_width=2, color=pallette[idx], legend_label=f"{N} lines")

p.legend.location = "top_right"
p.legend.click_policy = "hide"
p.xaxis.axis_label = "Angle (degrees)"
p.yaxis.axis_label = "Intensity"
p.yaxis.axis_label_text_font_style = "bold"
p.xaxis.axis_label_text_font_style = "bold"
output_file("plot_snippet.html")
show(p)
