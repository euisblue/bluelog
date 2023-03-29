# [Blue Blog](https://bluelog-b6d3ilsz3-euisblue.vercel.app/)


## Progress
- 2022-01-05
  + Inital blog created by following [this](https://nextjs.org/learn/basics/create-nextjs-app) tutorial from Next.js <br /><img src="./public/readme/20220105-initial.jpg" width="400" alt="Initial blog" />
  + url modified --> `/posts/<post-language>/<slug>/`
- 2022-01-06
  + Attempted to add 'prism' for syntax highlighting but it didn't go well. After parsing markdown files, no classes were added to tags.
  + Started implementing the blog home UI
- 2022-01-07
  + Overall theme (blue-ish) defined. Utilized SASS's variable to set color schemes.
  + Finished posts (card style) UI using tailwindcss.
  + post's show (contents) UI done for now. Markdown not yet added but simply added a background color to differenciate with normal texts.<br/><img src="./public/readme/20220107-show.jpg" width="400" alt="Post's content UI" />
  + Each post's language is labeled with a circle with an animation.<br/><img src="./public/readme/20220107-5.webp" width="400" alt="Post's content UI" />
    * Korean => Red + Blue + White
    * English => Blue
    * Japanese => Red
  + Modified transition's to a keyframe animation.<br/><img src="./public/readme/20220107-keyframe.webp" width="150" alt="keyframe animation">
  + Footer added
  + Language selection added. I can click a lang to view only posts in that language.
    + I can also check available languages within a post.
- 2022-01-08
  + Dark/Light toggle added <br/> <img src="./public/readme/20220109-mode.webp" width="500" alt="Toggling mode">
  + tagging added <br/><img src="./public/readme/20220108-tagging.webp" width="400" alt="tagging">
- 2022-01-09
  + Markdown - syntax highlighting added
  + competitive programming section added. <br /> <img src="./public/readme/20220109-cp.gif" width="400" alt="cp">
- 2022-01-10
  + Home, Blog, and About section added
  + TIL separated into DS and Algo section <br /> <img src="./public/readme/20220110-nav.jpg" width="400" alt="cp">
- 2022-01-11
  + RSS added (not sure if it's done properly.... 🤔 ) 
  + custom 404 page added - used [vanta.js](https://www.vantajs.com/)
- 2022-01-14
  + Reviewed how other people built their blogs using Next.js
  + Refactored my code - Tried to break my codes into components. 
- 2022-01-15
  + Home header added. <br /> <img src="./public/readme/20220115-header.jpg" width="400" alt="header">
- 2022-01-26
  + DS and Algo tab merged. <br /> <img src="./public/readme/20220126-dsa.jpg" width="400" alt="DSA">
- 2022-01-29
  + UI updated <br /> <img src="./public/readme/20220129-ui.gif" width="400" alt="new UI">
  + SASS code refactored
  + Display recent posts in Home (was removed for .contentlayer)
- 2022-01-30
  + i.p. Mobile UI <br /> <img src="./public/readme/20220130-mobile-ui.gif" width="400" alt="Mobile UI">
  + Light mode icon changed
  + DSA (sidebar menu) mobile ui added <br /> <img src="./public/readme/20220130-mobile-docaside.gif" width="400" alt="Mobile UI Docaside">
