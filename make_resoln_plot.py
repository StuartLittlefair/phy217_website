import matplotlib.pyplot as plt
import numpy as np
from astropy import units as u


def real_grating(theta, wav, d, N, w):
    delta = 2 * np.pi * d * np.sin(theta) / wav
    delta = delta.decompose().value

    ideal = (np.sin(N * delta / 2) / np.sin(delta / 2)) ** 2
    x = (np.sin(theta) * np.pi * w / wav).decompose().value

    return ideal * np.sin(x) ** 2 / x ** 2


theta = np.linspace(-15, 15, 1000) << u.degree
lpm = 220 / u.mm
d = 1 / lpm

I1 = real_grating(theta, 550 * u.nm, d, 10, d / 2)
I2 = real_grating(theta, 615 * u.nm, d, 10, d / 2)
y = I1 + I2
y /= y.max()
plt.plot(theta, y, color="red", label="N=10")

I2 = real_grating(theta, 615 * u.nm, d, 3, d / 2)
I1 = real_grating(theta, 550 * u.nm, d, 3, d / 2)
y = I1 + I2
y /= y.max()
plt.plot(theta, y, color="blue", label="N=3")

plt.xlabel("Angle (degrees)")
plt.ylabel("Intensity")
plt.legend()
plt.show()
