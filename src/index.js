/* global Vue */

const date = new Date()
const copyright = `@ ${date.getFullYear()} Jacob Papageorgiou`

const lists = [
  { label: 'Apple' },
  { label: 'Avios' },
  { label: 'BT' }
]

const links = [
  {
    label: 'Email',
    link: 'mailto:jacob.papageorgiou@gmail.com'
  },
  {
    label: 'CV',
    link: '//gitprint.com/mostmojo/cv/blob/master/cv.md' 
  },
  {
    label: 'Linkedin',
    link: '//uk.linkedin.com/in/jacob-papageorgiou'
  },
  {
    label: 'Github',
    link: '//github.com/mostmojo'
  },
    {
    label: 'Instagram',
    link: '//instagram.com/mojodribbles'
  },
  {
    label: 'Twitter',
    link: '//twitter.com/most_mojo'
  }
]

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    copyright,
    lists,
    links
  }
})
