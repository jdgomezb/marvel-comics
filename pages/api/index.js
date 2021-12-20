// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function featured(req, res) {
  res.status(200).json({
    featured: [
      {
        name: 'Spider-man',
        className: 'spiderman',
        selected: true
      },
      {
        name: 'Wolverine',
        className: 'wolverine',
        selected: false
      },
      {
        name: 'Deadpool',
        className: 'deadpool',
        selected: false
      },
      {
        name: 'Iron man',
        className: 'ironman',
        selected: false
      },
    ]
  })
}
