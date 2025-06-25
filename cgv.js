const dateBar = document.querySelector('.datebody')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const list = document.querySelector('.list')

const dates = [
  {
    "date": "2025-06-14",
    "month": "06월",
    "weekday": "토",
    "day": "14",
    "selected": true
  },
  {
    "date": "2025-06-15",
    "month": "06월",
    "weekday": "일",
    "day": "15",
    "selected": false
  },
  {
    "date": "2025-06-16",
    "month": "06월",
    "weekday": "월",
    "day": "16",
    "selected": false
  },
  {
    "date": "2025-06-17",
    "month": "06월",
    "weekday": "화",
    "day": "17",
    "selected": false
  },
  {
    "date": "2025-06-18",
    "month": "06월",
    "weekday": "수",
    "day": "18",
    "selected": false
  },
  {
    "date": "2025-06-19",
    "month": "06월",
    "weekday": "목",
    "day": "19",
    "selected": false
  },
  {
    "date": "2025-06-20",
    "month": "06월",
    "weekday": "금",
    "day": "20",
    "selected": false
  },
  {
    "date": "2025-06-21",
    "month": "06월",
    "weekday": "토",
    "day": "21",
    "selected": false
  }
]

for (let i = 0; i < dates.length; i++) {
  const month = dates[i]['month']
  const weekday = dates[i]['weekday']
  const day = dates[i]['day']
  const date =
    `<div class="date">
        <div class="month-week">
            <span class="month">${month}</span>
            <span class="weekday">${weekday}</span>
        </div>
        <span class="day">${day}</span>
    </div>`
  // console.log(date)

  dateBar.innerHTML += date
}

const movies = [
  {
    icon: '15',
    title: '신명',
    live: '상영중',
    info: '드라마 / 118분 / 2025.06.02 개봉',
    schedules: [
      {
        screen: '2D | 1관 6층',
        totalSeats: '144',
        time: [
          { hour: '21:10', seat: '129' },
          { hour: '12:10', seat: '90' }
        ]
      },
      {
        screen: '2D | 6관 10층(LASER)',
        totalSeats: '123',
        time: [
          { hour: '16:00', seat: '83' },
        ]
      }
    ]
  },
  {
    icon: '15',
    title: '미션 임파서블: 파이널 레코닝',
    live: '상영중',
    info: '액션 / 169분 / 2025.05.17 개봉',
    schedules: [
      {
        screen: '2D | 1관 6층',
        totalSeats: '144',
        time: [
          { hour: '11:00', seat: '112' },
          { hour: '14:20', seat: '56' },
          { hour: '17:45', seat: '124' },
          { hour: '23:40', seat: '144' }
        ]
      },
      {
        screen: '2D | 6관 10층(LASER)',
        totalSeats: '123',
        time: [
          { hour: '18:30', seat: '98' },
          { hour: '21:50', seat: '123' }
        ]
      }
    ]
  },
  {
    icon: 'ALL',
    title: '인생은 아름다워',
    live: '상영중',
    info: '드라마,전쟁,코미디 / 116분 / 2025.06.11 개봉',
    schedules: [
      {
        screen: '2D | 2관 6층(LASER)',
        totalSeats: '123',
        time: [
          { hour: '14:45', seat: '75' },
          { hour: '19:40', seat: '95' }

        ]
      }
    ]
  }
]

for (let j = 0; j < movies.length; j++) {
  const movie = movies[j]

  const movieDiv = document.createElement('div')
  movieDiv.classList.add('movie')

  let html = `
    <span class="icon">${movie.icon}</span>
    <span class="title">${movie.title}</span>
    <span class="live">${movie.live}</span>
    <span class="movie-info">${movie.info}</span>
    <br>
    <br>`

  for (let s = 0; s < movie.schedules.length; s++) {
    const schedule = movie.schedules[s]
    html += `
      <span class="time-info"> >${schedule.screen} | 총 ${schedule.totalSeats}석 </span>
      <br>
      <div class="boxs">
    `

    for (let k = 0; k < schedule.time.length; k++) {
      const time = schedule.time[k]
      html += `
        <div class="box">
          <span class="hours">${time.hour}</span>
          <span class="seat">${time.seat}석 </span>
          <div class="popup">준비중</div>
        </div>
      `
    }

    html += `</div>`
  }

  movieDiv.innerHTML = html
  list.appendChild(movieDiv)
}