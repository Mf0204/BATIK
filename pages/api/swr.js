export default (req, res) => {
    res.status(200).json(
    {dtberita:[
    {url: '/download.jpg', name: 'Judul No 1'},
    {url: '/download.jpg', name: 'Judul No 2'},
    {url: '/download.jpg', name: 'Judul No 3'}
    ]
    }
    )
   }
   