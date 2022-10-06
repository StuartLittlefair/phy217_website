
var all_figures = {
    /* Lecture 1 */
    "atmos": {
        "filename": "files/small_649.png",
        "caption": "Views through the atmosphere (not to scale)"
    },
    "atmos_lambda": {
        "filename": "files/small_652.jpg",
        "caption": "Sketch of the transparency of the Earth's atmosphere as a function of wavelength. " +
            "Taken from <a href='http://wps.aw.com/aw_carroll_ostlie_astro_2e/48/12319/3153833.cw/index.html'>Carrol & Ostlie.</a>"
    },
    "diffraction": {
        "filename": "files/small_5424.gif",
        "caption": 'Schematic showing wavefronts radiating from a point source at infinity and imaged by a ' +
            'telescope. The "aperture" in the figure represents an optical element, such as a mirror or lens, ' +
            'with the ability to bring light to a focus.Credit: Vik Dhillon'
    },
    "airy": {
        "filename": "files/small_5429.gif",
        "caption": String.raw`Schematic showing the diffraction pattern produced in the focal plane of a telescope when imaging a point source. \(\alpha\) is the angle between the centre of the Airy disc and the first minimum and denotes the theoretical resolving power of the telescope. Credit: Vik Dhillon`
    },
    "rayleigh": {
        "filename": "files/small_5435.gif",
        "caption": String.raw`<strong>Left:</strong> image of the overlapping diffraction patterns from two point sources separated by an angle \(\alpha\). <strong>Right:</strong> The black curve shows a cut through the image on the left. According to Rayleigh's criterion, the two sources are just resolved.  Credit: Vik Dhillon`
    },
    "turbulent_wavefronts": {
        "filename": "files/small_668.gif",
        "caption": "Propagation of wavefronts through the atmosphere. Credit: Vik Dhillon"
    },
    "seeing_examples": {
        'filename': 'files/small_674.gif',
        'caption': ' <strong>Left:</strong> Example of a short-exposure (of order milliseconds) image of a point source through a ~10 cm ground-based telescope. The fact that the first diffraction ring can just be seen surrounding the Airy disc implies that the instantaneous resolution is close to the diffraction limit, but significant image motion would cause blurring in a longer exposure, similar to that shown in the right-hand panel. <strong>Centre:</strong> Short-exposure image of a point source through a ~1 m ground-based telescope. The image is broken up into bright, dancing speckles, which are smeared-out in the longer-exposure image shown in the <strong>right-hand panel</strong>. Credit: Vik Dhillon'
    },
    'seeing_movie': {
        'filename': 'files/small_677.gif',
        'caption': 'A <a href="http://spiff.rit.edu/classes/phys445/lectures/atmos/animloop.gif">movie</a> of a series of very short exposures taken of a star with a 6-m diameter Russian telescope, showing the speckle pattern. Note the image scale.'
    },
    "seeing_disc": {
        "filename": "files/small_687.png",
        "caption": "Schematic showing the seeing profile of a star and how the FWHM is measured. Credit: Vik Dhillon"
    },

    // Lecture 02
    "nnser": {
        'filename': 'files/small_786.gif',
        'caption': "<strong>Left:</strong> a movie showing a series of images of the binary star NN Ser. <strong>Right:</strong> the <em>lightcurve</em>, a measurement of NN Ser's flux vs time, obtained from the images. Credit: Vik Dhillon/Tom Marsh"
    },
    "centroiding": {
        'filenames': ['files/small_806.png', 'files/small_807.png'],
        'captions': [
            'Gaussian fit to the faint star (aperture 1) in the NN Ser movie above.',
            'Gaussian fit to the bright star (aperture 2) in the NN Ser movie. Note how their FWHM are almost identical, even though the bright star appears to cover more pixels than the faint star in the NN Ser images. The background sky level is given by the vertical offset of the fit from the x axis. Credit: Vik Dhillon'
        ]
    },
    "apertures": {
        'filename': 'files/small_821.png',
        'caption': 'aperture photometry from a CCD image. The target is labelled as aperture 1. The non-variable comparison star is labelled as aperture 2 (in green). The unmarked bright star is saturated and hence unusable. The inner circle defines the total signal from the target. The annulus defined by the two outer circles is used to calculate the signal from the sky. Credit: Vik Dhillon'
    },
    'tres1': {
        'filename': 'files/small_833.png',
        'caption': 'Relative photometry of the exoplanet host star Tres-1. The <strong>top panel</strong> shows the number of counts from the star as a function of time. The star is setting and the counts gradually decrease to to atmospheric extinction. There is also a bump around 2 hours due to seeing variations. The <strong>bottom panel</strong> shows the ratio of counts from Tres-1 and a comparison star. This removes the effects of transparency and seeing variations, and the dip caused by the planet passing in front of the host star is clearly seen.'
    },

    // Relative Photometry Practical 03
    'aij_mw': {
        'filename': 'files/small_899.png',
        'caption': 'the AstroImageJ main window'
    },
    'aij_photwin': {
        'filename': 'files/small_909.png',
        'caption': 'the AstroImageJ photometry window'
    },
    'aij_stacking': {
        'filename': 'files/small_921.png',
        'caption': 'the AstroImageJ Stack Aligner window'
    },
    'aij_seeing_prof': {
        'filename': 'files/small_927.png',
        'caption': 'the seeing profile for a bright star in the SZ Lyn data. AstroImageJ shows the FWHM at the top of the plot, and makes suggestions for the object aperture and sky annulus sizes, in this case 5, 9 and 14 pixels respectively'
    },
    'aij_aps': {
        'filename': 'files/small_947.png',
        'caption': 'the AstroImageJ Multi-Aperture Measurement window. Here you can set the size of the object aperture and sky annuli. Note that the <strong>Update plot...</strong> box is unchecked.'
    },
    'szlyn': {
        'filename': 'files/small_957.png',
        'caption': 'an image of the sky centred on SZ Lyn. This image covers a slightly smaller area of sky than your data, and the orientation is not the same. You should be able to use it to find SZ Lyn in your images.'
    },

    // Lecture 04
    'johnson_curves': {
        'filename': 'files/small_1213.gif',
        'caption': 'filter profiles of the UBVRI filter set. Also plotted is the transmission of the atmosphere (dotted line) and the quantum efficiency of a typical CCD (dashed line). Credit: Vik Dhillon.'
    },
    'johnson_filters': {
        'filename': 'files/small_1219.jpg',
        'caption': 'a photograph of the UBVRI filters. The U and I filters look black since they transmit light which is largely beyond the range of wavelengths detectable by the eye'
    },
    'sdss_curves': {
        'filename': 'files/small_1234.gif',
        'caption': 'filter profiles of the SDSS filter set. Also plotted is the transmission of the atmosphere (dotted line) and the quantum efficiency of a typical CCD (dashed line). Credit: Vik Dhillon'
    },
    'airmass': {
        'filename': 'files/small_1257.png',
        'caption': "a thin, plane-parallel layer in the Earth's atmosphere. As the zenith distance of the star increases, the path length through the atmosphere increases, and hence the absorption increases. Credit: Vik Dhillon"
    },
    'colour_terms_origin': {
        'filename': 'files/small_1278.png',
        'caption': 'plot by <a href="http://spiff.rit.edu/classes/phys445/lectures/color_terms/color_terms.html">Michael Richmond</a> showing two different V filters and the spectra of hot and cold stars, demonstrating why correcting for colour terms is necessary when performing high-accuracy photometry (see text for details).'
    },
    'colour_terms_fit': {
        'filename': 'files/small_1288.png',
        'caption': 'a <a href="http://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2000PASA...17..244S&db_key=AST&high=3c321cbf8323876">plot</a> of the difference between the catalogue magnitudes of a set of standard stars and their calibrated magnitudes (y axis) as a function of colour (x axis). The gradient of the line is equal to the colour term.'
    },

    // P05: Absolute Photometry
    'aij_astwin': {
        'filename': 'files/small_1348.png',
        'caption': 'The astrometry window in AstroImageJ. You must put your astrometry.net API key in the <kbd>User Key</kbd> box. If the <kbd>Auto Save</kbd> checkbox is ticked, your image will automatically be overwritten by one with an astrometric solution.'
    },
    'ngc869_aladin': {
        'filename': 'files/small_1366.png',
        'caption': 'A well-calibrated image of NGC 869. Notice how the stars and catalog objects line up. This tells us the conversion between pixel coordinates and sky coordinates is accurate.'
    },
    'aperture_slice': {
        'filename': 'files/small_1383.png',
        'caption': 'An aperture slice plot from APT, showing horizontal and vertical slices across the image. In this example, the peak of the star is around 2500 counts above the background, and the FWHM is roughly 3 pixels. Using these numbers, reasonable values for the aperture sizes have been set, and are shown on the plot.'
    },
    'apt_sources': {
        'filenames': ['files/small_1407.png', 'files/small_1408.png'],
        'captions': [
            'The APT source list window',
            'The APT create source list window, with reasonable settings for the images in this practical.'
        ]
    },
    'topcat_vizier': {
        'filename': 'files/small_1462.png',
        'caption': 'The VizieR catalog query window in Topcat. The settings shown here will download the UCAC4 catalog data in a 40 arc minute radius around NGC 869'
    },
    'topcat_mw': {
        'filename': 'files/small_1465.png',
        'caption': 'The Topcat main window. Loaded tables are shown in the list on the left. The active table is highlighted. On the right you can change the sort order of the table, and select the active subset.'
    },
    'apt_calib': {
        'filename': 'files/small_1484.png',
        'caption': 'The APT photometric calibration tool. The graph shows the difference between calibrated magnitude and instrumental magnitude + zero point on the y-axis, and instrumental magnitude on the x-axis. A neat line in this graph indicates a good calibration. Lots of scatter suggests poor photometry! The text log window shows the calculated zero point, and the error.'
    },
    'cmd_ngc869': {
        'filename': 'files/small_1490.png',
        'caption': 'A colour-magnitude diagram for the bright stars in the field of NGC 869, plotted using the 2D plotting option in Topcat.'
    },

    /* Lecture 6: Refractors */
    "telschematic": {
        "filename": "files/small_2170.png",
        "caption": String.raw`A schematic showing the function of a telescope. The 'aperture' in the figure represents an optical element, such as a mirror or lens, with the ability to bring light to a focus. Light rays from two objects, separated by an angle \(\theta\) on the sky, are shown. Notice how the image in the focal plane is upside down.`
    },
    "chromatic_abb": {
        "filename": "files/small_2183.gif",
        "caption": "Schematic of a simple refracting telescope, illustrating the effect of chromatic aberration. Credit: Vik Dhillon."
    },
    "chromatic_halos": {
        "filename": "files/small_2191.jpg",
        "caption": "Photograph of the Lagoon Nebula, showing the blue halos due to chromatic aberration. The bright star at the top is probably quite red, and hence lacks a halo."
    },
    "achromat": {
        "filename": "files/small_2199.gif",
        "caption": "Schematic showing how an achromatic doublet can correct for chromatic aberration by bringing light of two different colours to the same focus. Credit: Vik Dhillon"
    },
    "yerkes": {
        "filename": "files/small_2213.jpg",
        "caption": "A photogaph of the 40-inch, f/19 Yerkes refractor. Note human on left for scale."
    },

    /* L07: Reflectors */
    "spherical_parabola": {
        "filenames": ["files/small_5640.gif", "files/small_5642.gif"],
        "captions": [
            "a schematic showing how a spherical concave mirror can collect light and bring it to a focus. The resulting image suffers from spherical aberration.",
            "spherical aberration can be removed using a parabolic mirror, as shown in the right panel. Credit: Vik Dhillon"
        ]
    },
    "hst_aberration": {
        "filename": "files/small_5649.gif",
        "caption": "<strong>Left:</strong> <a href='http://imgsrc.hubblesite.org/hu/db/1994/08/images/a/formats/print.jpg'>Image</a> " +
            " of a star taken with the HST, showing the blurred, circularly-symmetric image characteristic of spherical aberration. " +
            "<strong>Right:</strong> Image of a star taken with the corrected HST, showing just the Airy disc and diffraction rings, indicating that " +
            "the spherical aberration has been successfully removed: the image of the star on the left covers approximately 2 arcseconds, " +
            "whereas that on the right covers only 0.05 arcseconds. "
    },
    "parabola_offaxis_rays": {
        "filename": "files/small_5662.png",
        "caption": "Schematic showing off-axis rays of light being brought to focus by a parabolic mirror.  For off-axis rays, " +
            "there is no good focal point, leading to aberrations."
    },
    "coma": {
        "filename": "files/small_5678.png",
        "caption": "Coma is the largest off-axis aberration. It derives its name from the comet-like appearance of the resulting images, as shown in the figure below. At the centre of the focal plane, the images of the stars are point-like. Moving towards the edge of the image, however, the stellar images become increasing comet-like, with the faint, fanned 'tail' always pointing away from the centre of the field."
    },
    "astigmatism": {
        "filename": "files/small_5686.jpg",
        "caption": "The next most important off-axis aberration is astigmatism. Astigmatism can easily be recognised in a telescope if the images of off-axis point sources are elliptical. The presence of astigmatism can be confirmed by adjusting the telescope focus, i.e. moving the focal plane, first one way and then the other. The ellipse should turn into a circle and then into an ellipse again on the other side of the best focus, but with its major axis rotated by 90o. It is important not to confuse this aberration, which affects only off-axis images, with the eye defect of the same name, which affects the entire field of vision and is due to a misshapen eye lens."
    },
    "distortion": {
        "filename": "files/small_5694.jpg",
        "caption": "Distortion of field is said to be present when the plate scale varies over the focal plane, as shown in the figure. The yellow box in the left-hand image is near the field centre. The positions of the two brightest stars in this yellow box should be compared with the positions of the same two stars in the right-hand image, which are now at the field edge. It can be seen that, although the individual stellar images appear aberration-free, their separation is much greater in the right-hand image, i.e. the plate scale is smaller."
    },
    "curvature": {
        "filename": "files/small_5702.jpg",
        "caption": "Curvature of field is said to be present when the points of best focus lie on a curved rather than a flat focal plane. An example of the resulting image is shown in the figure, which shows the corners of a much wider field <a href='http://www.nightsky.at/Art/Lyra_field_curvature.jpg'>photograph</a>. The image shows how the blurring occurs in a radial direction with respect to the centre of the field. Curvature of field can be reduced using field flattening lenses"
    },
    "newtonian": {
        "filenames": ['files/small_2414.gif', 'files/small_2415.jpg'],
        "captions": [
            "a schematic of a Newtonian reflector. Credit: Vik Dhillon.",
            "a photograph of a modern Newtonian reflector"
        ]
    },
    "cassegrain": {
        "filename": "files/small_2436.gif",
        "caption": "a schematic of a Cassegrain reflector. The hyperbolic secondary increases the focal length, placing it below the primary mirror. Credit: Vik Dhillon"
    },
    "hale": {
        "filenames": ['files/small_2455.jpg', 'files/small_2457.jpg'],
        "captions": [
            "photograph of the 5m Hale Telescope on Mount Palomar, California. This telescope is a Cassegrain reflector and was the largest telescope in the world between 1948 and 1993. Note the instruments at Cassegrain focus.",
            "photograph of an observer in the prime focus cage of the Hale telescope. Nowadays, remote operation of prime-focus instrumention means that it is no longer necessary for astronomers to spend the night in the cage!"
        ]
    },
    "schmidt_cass": {
        "filename": "files/small_2510.gif",
        "caption": "A schematic of a Schmidt-Cassegrain telescope. The lens corrects for spherical aberrations. Credit: Vik Dhillon"
    },

    // L08: amateur use of scopes
    "eyepieces": {
        "filename": "files/small_2710.png",
        "caption": 'Schematic of a refracting telescope, illustrating the role of the eyepiece and the eye. The same concepts would apply if considering a reflecting telescope. Credit: Vik Dhillon'
    },
    "eq_mount": {
        "filename": "files/small_2732.png",
        "caption": "Schematic of an equatorial mounting. The mount rotates about two axes, one of which (the polar axis) is aligned with the Earth's rotation axis, and hence the celestial pole."
    },
    "altaz_mount": {
        "filename": "files/small_2744.jpg",
        "caption": "An Alt-Az mount, built by <a href='http://planewave.com/products-page/cdk700/0-7m-cdk-telescope-system'>PlaneWave.</a>"
    },
    "field_rotation_vid": {
        "url": "0uGgnAlTqto",
        "caption": "A video showing the effects of field rotation. Note that the equatorial mount does not suffer from this effect, making it suitable for amateur astrophotography."
    },

    // L09: Professional Use
    "cloud_cover_vid": {
        "url": "files/MODAL2_M_CLD_FR.mov",
        "caption": "Monthly average cloud cover, as revealed by NASA's Terra satellite. Colours range from blue (no clouds) to white (totally cloudy)."
    },
    "light_pollution": {
        'filename': 'files/world2020B_low3.png',
        "url": "http://djlorenz.github.io/astronomy/lp2006/overlay/dark.html",
        "caption": "Image showing global light pollution, as recorded in the <a href='http://djlorenz.github.io/astronomy/lp2020/'>World Atlas of Artificial Night Sky Brightness (2020)</a>"
    },
    "bigscopes": {
        "url": "todo",
        "filename": "files/small_5730.png",
        "caption": "A google map showing the location of the world's largest optical telescopes. The overlying heat map shows the density of big telescopes around the world. The worlds largest optical telescopes are concentrated on Mauna Kea, Hawaii and the Atacama desert in Chile."
    },
    "big_three_obs": {
        "names": ['Hawaii', 'La Palma', 'Paranal'],
        "filenames": ["files/fullres_5735.gif", "files/fullres_5736.jpg", "files/fullres_5737.gif"],
        "thumbnails": ["files/thumb_5735.gif", "files/thumb_5736.jpg", "files/thumb_5737.gif"],
        "caption": "Photographs of arguably the world's best astronomical observatories."
    },
    "autoguiding": {
        "filenames": ['files/small_5753.png', 'files/small_5755.jpg'],
        "captions": [
            'an off-axis guider using pick-off optics. The pick off optics can be moved in order to send the light from a guide star to the guide camera.',
            'a photograph of ROSA, the 10" robotic telescope on the roof of the Department of Physics and Astronomy at Sheffield, with the dome removed. The piggy-back mounted guide scope, a 3-inch refractor, can be seen on top of the main telescope. A CCD autoguider has been inserted in place of the eyepiece.'
        ]
    },
    "thin_thick_mirrors": {
        'filenames': ['files/small_3069.jpg', 'files/small_3070.jpg'],
        'captions': [
            'photograph of the 4.2 m primary mirror of the WHT, which has a thickness/diameter ratio of 13%.',
            'photograph of the 8.1 m primary mirror of the Gemini North telescope, which has a thickness/diameter ratio of only 2%.'
        ]
    },
    "activeoptics": {
        'filename': 'files/small_3081.jpg',
        'caption': '<a href="http://www.eso.org/public/images/eso9940b/">schematic</a> showing the components of a typical active optics system. Note the actuators (shown as green springs) controlling the primary mirror shape and the vertical and horizontal position of the secondary mirror.'
    },

    // L10: Adaptive Optics
    "fried": {
        'filename': 'files/small_3205.png',
        'caption': String.raw`Schematic showing the definition of the Fried parameter \(r_0\), and how it relates to coherence time, \(t_0 = t_2-t_1\), and isoplanatic angle, \(\theta_0\). Adapted from a figure by Vik Dhillon.`
    },
    'ao_principles': {
        'filename': 'files/small_3227.jpg',
        'caption': 'Principles of adaptive optics. '
    },
    'sh_schematic': {
        'filename': 'files/small_3240.jpg',
        'caption': 'Schematic showing the principle of Shack-Hartmann wavefront sensing. A plane wavefront produces a regularly spaced series of dots on the CCD - these are the reference positions. The corrugated wavefront produces a series of dots which are displaced from these reference positions. The deformable mirror is moved to to match the shape of the wavefront, which reflects a corrected, plane wavefront.'
    },
    'sh_movie': {
        'filename': 'files/small_3243.png',
        'caption': 'A movie of images obtained from the JOSE Shack-Hartmann wavefront sensor on the William Herschel Telescope, when illuminated by a bright star. The blank region in the centre is the shadow of the secondary mirror. Each frame is 1/10th of a second.'
    },
    'guidestars': {
        'filenames': ['files/small_3253.png', 'files/small_3257.png'],
        'captions': [
            'Schematic showing the different types of guide star available for adaptive optics, and the <strong>cone effect</strong>.  Credit: Vik Dhillon',
            'Photograph of the laser guide star produced by the ALFA adaptive optics system on the Calar Alto 3.5 m telescope in Spain. The sodium beacon is the point-like image at the centre; the plume to the right is light scattered back by Rayleigh scattering.'
        ]
    },
    'strehl': {
        'filename': 'files/small_3278.png',
        'caption': 'The seeing disc of a star superposed on the theoretical diffraction pattern. The Strehl ratio is the ratio of the peak intensities of the two profiles.'
    },
    "ao_examples": {
        "names": ['IWTau', 'AOMovie', 'GalacticCenter'],
        "filenames": ["files/fullres_3287.jpg", "files/fullres_3288.png", "files/fullres_3289.png"],
        "thumbnails": ["files/thumb_3287.jpg", "files/thumb_3288.png", "files/thumb_3289.png"],
        "caption": "Examples of AO in action. Click on each for a larger picture and explanation."
    },

    // Lecture 11: CCDs
    "ccd": {
        'filename': 'files/small_48240.jpg',
        'caption': 'a  photograph showing an CCD. The central, dark-gray region is the Silicon wafer where photons are recorded. It is surrounded by a package containing the readout electronics and wiring.'
    },
    'semiconductors': {
        'filenames': ['files/small_48157.png', 'files/small_48158.png'],
        'captions': [
            'the band structure of electron energy levels in a solid. The <strong>valence band</strong> is the highest energy band occupied by electrons. The band above this is known as the conduction band. ',
            'the difference between conductors, metals and semiconductors is explained by the energy difference between the valence and conduction bands. '
        ]
    },
    'buckets': {
        'filenames': ['files/small_48186.png', 'files/small_48187.gif'],
        'captions': [
            '<a href="http://www.qucam.com/primer.html">schematic</a> showing how charge coupling moves the photo-electrons from each pixel to the readout electronics, by way of the rain-bucket analogy',
            'an <a href="http://spiff.rit.edu/classes/phys445/lectures/ccd1/ccd1.html">animation</a> showing the same process'
        ]
    },
    'clocking': {
        'filename': 'files/small_48204.gif',
        'caption': 'an <a href="http://commons.wikimedia.org/wiki/File:CCD_charge_transfer_animation.gif">animation</a> showing the clocking of electrons in a CCD. By this process the photo-electrons are moved from one pixel to the next.  '
    },
    'saturation': {
        'filenames': ['files/small_48219.jpg', 'files/small_48220.png'],
        'captions': [
            'CCD images showing the effects of blooming, when the number of electrons in a pixel exceeds the full-well depth.',
            'the profile from a saturated star. The central pixels should have values exceeding 65535 ADU, but the ADC cannot represent these. This results in a characteristic flat-topped profile. Saturation means we cannot accurately measure the brightness of this star.'
        ]
    },

    // L12: processing CCD data
    'bias': {
        'filename': 'files/small_3595.png',
        'caption': "A single bias frame, taken with the department's robotic telescope ROSA. The bias level in this image is 320 counts. Each pixel is scattered around this value due to read noise."
    },
    'dark': {
        'filename': 'files/small_3625.png',
        'caption': "A single dark frame, with an exposure time of 300s, taken with the department's robotic telescope ROSA. The mean level in this image is 370 counts. 320 of these counts are bias level, giving a dark current of 50 counts. "
    },
    "flat": {
        'filename': 'files/small_3655.png',
        'caption': 'An image of the twilight sky, taken using the ROSA telescope on the roof of the Hicks building. The overall illumination pattern is a result of vignetting. Pixel-to-pixel variations, and large donuts from out-of-focus dust spots can also be seen.'
    },
    "flat_panel": {
        'filename': 'files/small_3668.jpg',
        "caption": 'A <a href="http://www.gerdneumann.net/english/astrofotografie-parts-astrophotography/aurora-flatfield-panels/uebersicht-aurora-flatfield-panels-overview.html">flat field panel</a> placed at the aperture of a Newtonian telescope. The panel provides a roughly uniform illumination and can be placed at the aperture of a small telescope. The 16" Hicks telescope uses a panel like this for taking flat field frames.'
    },
    'm51': {
        'filenames': ['files/small_3743.png', 'files/small_3744.png'],
        'captions': [
            'A raw CCD image of M51. This is a 200-sec exposure in the I-band taken using ROSA. Non-even illumination due to vignetting is visible, as are bright "hot pixels" which are scattered throughout the image.',
            'a de-biassed, dark-subtracted and flat-fielded version of the same image. Note the correction for vignetting and removal of hot pixels. '
        ]
    },
    'm51_colour': {
        'filename': 'files/small_3751.jpg',
        'caption': 'A colour image of M51, taken using ROSA. 18 images were taken in each of the B, V and I filters. These images were de-biassed, dark-subtracted and flat-fielded. They were then aligned to account for errors in auto guiding, and median-combined to create a master image in each filter. These were combined to make a colour image.'
    },

    // P13: CCD reduction in AiJ
    "aij_dpwin": {
        'filename': "files/small_3784.png",
        "caption": "The astroImageJ data processing (DP) window, which is used to process CCD images, and to create the master bias, dark and flat frames."
    },
    "aij_masterbias": {
        'filename': "files/small_3802.png",
        'caption': 'A master bias frame, displayed in astroImageJ. The mean bias level is displayed at the bottom of the window.'
    },
    'aij_masterdark': {
        'filename': 'files/small_3944.png',
        'caption': "A master dark frame displayed in astroImageJ. The mean dark current is around 50 counts/pixel, but several 'hot pixels' have much higher levels of dark current."
    },
    'aij_masterflat': {
        'filename': 'files/small_3963.png',
        'caption': 'The master flat field in the I-band filter, displayed in astroImageJ. The mean level is 1 count. The vignetting pattern, <a href="../l12/#flats">flat field grain</a> and dust donuts are clearly visible. '
    },

    // Lecture 14: cameras
    "simple_imaging": {
        "filenames": ['files/small_4140.png', 'files/small_4141.jpg'],
        "captions": [
            'a simple imager, where a detector is placed at the focal place. Filters are placed in the converging beam and thus affect the focus position',
            'the QSI 523 CCD camera with a 5-position filter wheel. This camera is used in the 10" remote-controlled telescope ROSA, and the robotic 50cm pt5m'
        ]
    },
    'focal_reducer': {
        "filename": 'files/small_4321.png',
        "caption": String.raw`a focal reducer. A positive optical element acts to shorten the focal length of the telescope. This reduces the magnification, enlarges the field of view and increases the \(f\)-ratio. Note the shift in the position of the focal plane when using a focal reducer/extender, which can be compensated for by refocusing the telecope. This shift should <strong>not be confused</strong> with the change in the focal length induced by the focal reducer/extender.`
    },
    're-imager': {
        "filename": 'files/small_4374.png',
        "caption": 'a schematic of a re-imager. The plate scale at the camera focal plane is different to the plate scale at the telescope focal plane due to the action of the collimator and camera lens. Note the position of the filter, which allows for the smallest filter to be used, whilst still allowing all rays that pass through the telescope aperture to pass through the filter.'
    },
    'ultracam': {
        "filenames": ['files/small_4382.jpg', 'files/small_4383.jpg'],
        "captions": [
            'a schematic ray-trace through ULTRACAM, the Sheffield/Warwick/UKATC-built three-colour imager. Light from the telescope focal plane at the top is collimated and then passes through two dichroic beamsplitters. The first reflects just the blue light, which then passes through a filter before being re-imaged by a camera onto a CCD (the yellow cylinder). The second dichroic reflects just the green light, leaving the red light to fall onto the CCD at the bottom.',
            "ULTRACAM and it's creator, Prof Vik Dhillon. Here ULTRACAM is mounted at the Cassegrain focus of the 4.2m William Herschel Telescope on La Palma."
        ]
    },

    // L15: Spectrographs I
    "prism": {
        "filename": "files/small_4411.png",
        "caption": "Dispersion of light by a prism. Note the loss of light at each air-glass surface, which makes prisms inefficient."
    },
    "two_line_grating": {
        "filename": "files/small_4425.png",
        "caption": "A simplified diffraction grating with two lines. "
    },
    "diffraction_pattern": {
        "filename": "files/small_4432.jpg",
        "caption": '<a href="http://h2physics.org/?cat=49">Photograph</a> showing the diffraction pattern produced by a monochromatic light source (<strong>top</strong>) and a white light source (<strong>bottom</strong>) incident on a diffraction grating. The central bright line is the zeroth order, with orders ±1, ±2 and ±3 shown either side of this. Notice the larger dispersion in the higher orders, as predicted by the grating equation. We will discuss the origin of the fainter lines between the bright lines in the <a href="../l16/">next lecture</a>. '
    },
    "spectrograph_designs": {
        "filenames": ["files/small_4447.png", "files/small_4448.png"],
        "captions": [
            "schematic of an astronomical spectrograph incorporating a reflection grating. The slit is in the focal plane of the telescope. The detector is in the focal plane of the camera.",
            "schematic of a spectrograph using a transmission grating."
        ]
    },
    "slitless": {
        "filenames": ["files/small_4488.png", "files/small_4489.png"],
        "captions": [
            '<a href="http://www.hs.uni-hamburg.de/EN/For/Exg/Sur/hes/qso_surveys.html">image</a> of a star field.',
            'the same star field, but imaged by a slitless spectrograph. Note how the spectra of objects at the same y position in the image overlap.'
        ]
    },
    "slit_example": {
        'filenames': ["files/small_4490.png", "files/small_4491.png", "files/small_4492.png"],
        "captions": [
            "ULTRASPEC data showing the image of a star field recorded with the slit and grating removed from the beam",
            "the image of the star field when just the slit is inserted into the beam",
            "the spectra of the stars on the slit that result when the grating is also inserted into the beam. The y axis is the spatial direction and the x axis is the dispersion direction. Credit: Vik Dhillon."
        ]
    },
    "m57": {
        "filenames": ['files/small_4523.jpg', 'files/small_4524.jpg'],
        'captions': [
            'Image of the Ring Nebula (M57)',
            'Slitless spectrum of the Ring Nebula, showing that individual spectral lines take on the appearance of the nebula.'
        ]
    },
    'slit_widths': {
        'filenames': ['files/small_4525.jpg', 'files/small_4526.jpg'],
        'captions': [
            'Photograph of light illuminating five different slits of width, from top-to-bottom, 400 μm, 100 μm, 50 μm, 200 μm and 400 μm.',
            'spectra of a hydrogen lamp, produced by illuminating the slits in the left-hand panel. Note how the spectrum is made up of images of the slit shifted in wavelength.'
        ]
    },
    "full_grating_eq": {
        'filename': 'files/small_4506.png',
        'caption': String.raw`A modified version of the simple diffraction grating. Now the light falls on the grating at an angle \(\phi\).`
    },

    // Lecture 16: Spectrographs II
    "multi_lined_grating": {
        'filename': 'files/small_4556.png',
        'caption': 'A multi-lined grating, with 4 gaps between the ruled lines acting as secondary sources. '
    },
    'grating_diffraction_patterns': {
        'url': 'partials/plot_snippet.html',
        'caption': 'The diffraction patterns obtained from different gratings. Idealised gratings with infinitesimally thin gaps are shown. Also plotted is the diffraction pattern from a single gap with finite width, and the realistic diffraction patterns from gratings with 2 and 6 gaps of finite width. Click on the labels for each line to hide or show that line. '
    },
    'order_overlap': {
        'filename': 'files/small_4584.png',
        'caption': String.raw`Order overlap. The above plot shows the diffraction pattern from a grating with \(N=30\). Three wavelengths are shown: 400 nm (blue), 500 nm (red) and 600 nm (black). Order overlap is clearly seen between the second and third orders, where the 600 nm light from the second order lies on top of the 400 nm light in the third order. Note how the dispersion increases with increasing order.`
    },
    'grating_resolution': {
        'filename': 'files/small_4604.png',
        'caption': 'A plot illustrating spectral resolution. The diffraction pattern of light consisting of two discrete wavelengths is shown for two gratings. The grating with more lines has a narrower diffraction pattern, allowing us to distinguish the two wavelengths.'
    },
    'slit_width_resoln': {
        'filenames': ['files/small_4602.png', 'files/small_4603.png'],
        'captions': [
            'Image of a star observed through a 5" wide slit',
            'The same star observed through a 1.5" wide slit'
        ]
    },

    // Lecture 17: Basic stats
    'calculus': {
        'filename': 'files/small_4894.png',
        'caption': String.raw`a graphical representation of \(P(A \, {\rm or } \, B)\). <strong>Top:</strong> Mutually exclusive events, so \(P(A \, {\rm or } \, B) = P(A) + P(B)\). <strong>Bottom:</strong> These events are not exclusive, so \(P(A \, {\rm or } \, B) = P(A) + P(B) - P(A,B) \).`
    },
    'gaussian_pdf': {
        'filename': 'files/small_4918.png',
        'caption': String.raw`the Gaussian probability distribution \(p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp{\left[ \frac{-(x-\mu)^2}{2\sigma^2} \right]}\). The probability of \(x\) lying 1\(\sigma\) away from the mean \(\mu\) is roughly 68%. There is a roughly 95% chance of lying 2\(\sigma\) away from the mean, and a 99.7% chance of lying 3\(\sigma\) away.`
    },
    'error_bars': {
        'filename': 'files/small_4923.png',
        'caption': String.raw`a visual demonstration of error bar sizes. <strong>Top:</strong> Correctly sized error bars, as expected roughly one third of the points lie 1\(\sigma\) or more away from the 'true' value, represented by the straight line. <strong>Middle:</strong> Error bars are two small. <strong>Bottom:</strong> Error bars are too large.`
    },
    'propagation': {
        'filename': 'files/small_4942.png',
        'caption': String.raw`an illustration of the transformation of a Gaussian random variable, \(x\). The transformation \(y = f(x)\) is shown as a thick curve. The first-order Taylor expansion is shown as a thin straight line. Note that in general, transforming \(x\) will mean \(y\) is not a Gaussian random variable, but if we approximate \(y\) with the Taylor expansion it will be. Dashed lines show the transformation between the means and standard deviations of \(x\) and \(y\).`
    },

    // Lecture 18: SNR
    'photon_bunching': {
        'filename': 'files/small_4158.png',
        'caption': 'photons from a faint, non-variable astronomical source incident on a CCD detector. The photons are emitted at random from the source. This leads to the photon spacing being non-uniform. The source emits <strong>on average</strong> 4 photons/sec, also shown is the number of photons in each 1 second interval.'
    },
    'sim_lightcurves': {
        'filename': 'files/small_4169.png',
        'caption': 'two simulated light curves of a variable star whose amplitude is 20% of the mean flux. In the upper panel, the noise level is 4% of the mean flux, and the amplitude is detected with a SNR=20/4=5. In the lower panel, the noise level is 10% of the mean flux, and the amplitude is detected with a SNR=20/10=2.'
    },

    // Lecture 19: Bayes
    'bayes_joke': {
        'filename': 'files/small_53.png',
        'caption': 'a <a href="http://blog.richmond.edu/physicsbunn/2013/06/16/the-bayes-wars-in-science/">cartoon</a> Venn diagram depicting the issue many Bayesian statisticians have with frequentist thinking.'
    },
    'distances': {
        'filename': 'files/small_79.png',
        'caption': String.raw`Bayesian distance estimation. The measured parallax naively suggests a distance of \(150 \pm 30\) pc. This is shown in the histogram, and the green line. Proper consideration of the prior knowledge of the distance  gives the probability distribution in red, which is biased towards larger distances, and has a most probable distance of 161 pc.`
    },


};

// add fignum to figures
var fignum = 1;
for (let key in all_figures) {
    all_figures[key]['fignum'] = fignum;
    fignum += 1;
}

module.exports = all_figures;
