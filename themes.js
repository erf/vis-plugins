const themes = [
  {
    "name": "acme",
    "url": "https://github.com/timoha/vis-acme",
    "file": "acme",
    "image": "https://raw.githubusercontent.com/timoha/vis-acme/master/screenshot.png"
  },
  {
    "name": "citron",
    "url": "https://github.com/kiwec/vis-citron",
    "file": "citron",
    "image": "https://raw.githubusercontent.com/kiwec/vis-citron/master/screenshot.png"
  },
  {
    "name": "papercolor",
    "url": "https://github.com/jceb/dotfiles",
    "file": "editors/.config/vis/themes/papercolor",
    "image": "https://github.com/jceb/dotfiles/raw/master/editors/.config/vis/themes/papercolor_vis_vim_side_by_side.png"
  },
  {
    "name": "seti",
    "url": "https://github.com/erf/vis-seti",
    "file": "seti",
    "image": "https://raw.githubusercontent.com/erf/vis-seti/master/screenshot.png"
  },
  {
    "name": "minimal-light",
    "url": "https://github.com/erf/vis-minimal-theme",
    "file": "minimal-light",
    "image": "https://user-images.githubusercontent.com/1562523/204408762-f9be19a1-9024-43aa-9429-d9472dee4ec2.png"
  },
  {
    "name": "minimal-dark",
    "url": "https://github.com/erf/vis-minimal-theme",
    "file": "minimal-dark",
    "image": "https://user-images.githubusercontent.com/1562523/204408770-20a82cd6-0540-48b5-9f17-bf3c0b24fb3f.png"
  },
  {
    "name": "minimal-light-clear",
    "url": "https://github.com/erf/vis-minimal-theme",
    "file": "minimal-light-clear",
    "image": "https://user-images.githubusercontent.com/1562523/204408762-f9be19a1-9024-43aa-9429-d9472dee4ec2.png"
  },
  {
    "name": "minimal-dark-clear",
    "url": "https://github.com/erf/vis-minimal-theme",
    "file": "minimal-dark-clear",
    "image": "https://user-images.githubusercontent.com/1562523/204408770-20a82cd6-0540-48b5-9f17-bf3c0b24fb3f.png"
  },
  {
    "name": "minimal-clear",
    "url": "https://github.com/erf/vis-minimal-theme",
    "file": "minimal-clear",
    "image": "https://user-images.githubusercontent.com/1562523/204667636-60de619b-8229-4f01-a540-99da73de6427.png"
  },
  {
    "name": "gruvbox",
    "url": "https://github.com/samlwood/vis-gruvbox",
    "file": "gruvbox",
    "image": "https://raw.githubusercontent.com/samlwood/vis-gruvbox/master/screenshot.png"
  },
  {
    "name": "base16-3024",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-3024",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-3024.png"
  },
  {
    "name": "base16-apathy",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-apathy",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-apathy.png"
  },
  {
    "name": "base16-ashes",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-ashes",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-ashes.png"
  },
  {
    "name": "base16-atelier-cave",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-cave",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-cave.png"
  },
  {
    "name": "base16-atelier-dune",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-dune",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-dune.png"
  },
  {
    "name": "base16-atelier-estuary",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-estuary",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-estuary.png"
  },
  {
    "name": "base16-atelier-forest",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-forest",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-forest.png"
  },
  {
    "name": "base16-atelier-heath",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-heath",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-heath.png"
  },
  {
    "name": "base16-atelier-lakeside",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-lakeside",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-lakeside.png"
  },
  {
    "name": "base16-atelier-plateau",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-plateau",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-plateau.png"
  },
  {
    "name": "base16-atelier-savanna",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-savanna",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-savanna.png"
  },
  {
    "name": "base16-atelier-seaside",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-seaside",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-seaside.png"
  },
  {
    "name": "base16-atelier-sulphurpool",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-atelier-sulphurpool",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-sulphurpool.png"
  },
  {
    "name": "base16-bespin",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-bespin",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-bespin.png"
  },
  {
    "name": "base16-brewer",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-brewer",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-brewer.png"
  },
  {
    "name": "base16-bright",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-bright",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-bright.png"
  },
  {
    "name": "base16-chalk",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-chalk",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-chalk.png"
  },
  {
    "name": "base16-circus",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-circus",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-circus.png"
  },
  {
    "name": "base16-codeschool",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-codeschool",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-codeschool.png"
  },
  {
    "name": "base16-cupcake",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-cupcake",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-cupcake.png"
  },
  {
    "name": "base16-darktooth",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-darktooth",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-darktooth.png"
  },
  {
    "name": "base16-default-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-default-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-default-dark.png"
  },
  {
    "name": "base16-default-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-default-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-default-light.png"
  },
  {
    "name": "base16-dracula",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-dracula",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-dracula.png"
  },
  {
    "name": "base16-eighties",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-eighties",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-eighties.png"
  },
  {
    "name": "base16-embers",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-embers",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-embers.png"
  },
  {
    "name": "base16-flat",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-flat",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-flat.png"
  },
  {
    "name": "base16-github",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-github",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-github.png"
  },
  {
    "name": "base16-google-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-google-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-google-dark.png"
  },
  {
    "name": "base16-google-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-google-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-google-light.png"
  },
  {
    "name": "base16-grayscale-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-grayscale-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-grayscale-dark.png"
  },
  {
    "name": "base16-grayscale-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-grayscale-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-grayscale-light.png"
  },
  {
    "name": "base16-green-screen",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-green-screen",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-green-screen.png"
  },
  {
    "name": "base16-gruvbox-dark-hard",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-dark-hard",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-hard.png"
  },
  {
    "name": "base16-gruvbox-dark-medium",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-dark-medium",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-medium.png"
  },
  {
    "name": "base16-gruvbox-dark-pale",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-dark-pale",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-pale.png"
  },
  {
    "name": "base16-gruvbox-dark-soft",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-dark-soft",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-soft.png"
  },
  {
    "name": "base16-gruvbox-light-hard",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-light-hard",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-light-hard.png"
  },
  {
    "name": "base16-gruvbox-light-medium",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-light-medium",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-light-medium.png"
  },
  {
    "name": "base16-gruvbox-light-soft",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-gruvbox-light-soft",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-light-soft.png"
  },
  {
    "name": "base16-harmonic16-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-harmonic16-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-harmonic16-dark.png"
  },
  {
    "name": "base16-harmonic16-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-harmonic16-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-harmonic16-light.png"
  },
  {
    "name": "base16-hopscotch",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-hopscotch",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-hopscotch.png"
  },
  {
    "name": "base16-ir-black",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-ir-black",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-ir-black.png"
  },
  {
    "name": "base16-isotope",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-isotope",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-isotope.png"
  },
  {
    "name": "base16-london-tube",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-london-tube",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-london-tube.png"
  },
  {
    "name": "base16-macintosh",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-macintosh",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-macintosh.png"
  },
  {
    "name": "base16-marrakesh",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-marrakesh",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-marrakesh.png"
  },
  {
    "name": "base16-materia",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-materia",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-materia.png"
  },
  {
    "name": "base16-mexico-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-mexico-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-mexico-light.png"
  },
  {
    "name": "base16-mocha",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-mocha",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-mocha.png"
  },
  {
    "name": "base16-monokai",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-monokai",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-monokai.png"
  },
  {
    "name": "base16-nord",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-nord",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-nord.png"
  },
  {
    "name": "base16-oceanicnext",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-oceanicnext",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-oceanicnext.png"
  },
  {
    "name": "base16-ocean",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-ocean",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-ocean.png"
  },
  {
    "name": "base16-onedark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-onedark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-onedark.png"
  },
  {
    "name": "base16-paraiso",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-paraiso",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-paraiso.png"
  },
  {
    "name": "base16-phd",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-phd",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-phd.png"
  },
  {
    "name": "base16-pico",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-pico",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-pico.png"
  },
  {
    "name": "base16-pop",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-pop",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-pop.png"
  },
  {
    "name": "base16-railscasts",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-railscasts",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-railscasts.png"
  },
  {
    "name": "base16-rebecca",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-rebecca",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-rebecca.png"
  },
  {
    "name": "base16-seti-ui",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-seti-ui",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-seti-ui.png"
  },
  {
    "name": "base16-shapeshifter",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-shapeshifter",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-shapeshifter.png"
  },
  {
    "name": "base16-solar-flare",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-solar-flare",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-solar-flare.png"
  },
  {
    "name": "base16-solarized-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-solarized-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-solarized-dark.png"
  },
  {
    "name": "base16-solarized-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-solarized-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-solarized-light.png"
  },
  {
    "name": "base16-spacemacs",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-spacemacs",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-spacemacs.png"
  },
  {
    "name": "base16-summerfruit-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-summerfruit-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-summerfruit-dark.png"
  },
  {
    "name": "base16-summerfruit-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-summerfruit-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-summerfruit-light.png"
  },
  {
    "name": "base16-tomorrow",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-tomorrow",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-tomorrow.png"
  },
  {
    "name": "base16-tomorrow-night",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-tomorrow-night",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-tomorrow-night.png"
  },
  {
    "name": "base16-twilight",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-twilight",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-twilight.png"
  },
  {
    "name": "base16-unikitty-dark",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-unikitty-dark",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-unikitty-dark.png"
  },
  {
    "name": "base16-unikitty-light",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-unikitty-light",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-unikitty-light.png"
  },
  {
    "name": "base16-woodland",
    "url": "https://github.com/pshevtsov/base16-vis",
    "file": "themes/base16-woodland",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-woodland.png"
  },
  {
    "name": "peaksea",
    "url": "https://gitlab.com/SZanko/vis-peaksea",
    "file": "peaksea",
    "image": "https://gitlab.com/SZanko/vis-peaksea/-/raw/master/img/peaksea-dark.jpg"
  }
]