export interface Task {
  id: number
  title: string
  content: string
}


export interface Section extends Record<keyof any, unknown> {
  id: number,
  url: string,
  title: string,
  tasks: Task[]
}

export type SectionWithoutTasks = Omit<Section, 'tasks'>

export const sections: Section[] = [
  {
    "id": 1,
    "url": "fsss",
    "title": "test",
    "tasks": [
      {
        "id": 2573345,
        "title": "fs",
        "content": "fsaf"
      },
      {
        "id": 511215127654236251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51236216251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 5122351,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51236251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51263251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51346251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 5121251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 515251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 512251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 5121511324623547423583422251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 5125555005251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51294679696590251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 512056803251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51567382251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 51676967052251,
        "title": "fass",
        "content": "12412412"
      },
      {
        "id": 5122869651,
        "title": "fass",
        "content": "12412412"
      }

    ]
  },
  {
    "id": 2,
    "url": "sfasg2q",
    "title": "homework",
    "tasks": [
      {
        "id": 6263,
        "title": "go",
        "content": "haghass"
      }
    ]
  }
]

export const getSectionTasks = (url: string): Task[] | void => {
  const section = sections.find(sec => sec.url == url)
  if (section) return section.tasks
}


export const justSections: SectionWithoutTasks[] = sections.map(sec => {
  // const { cards, ...rest } = sec
  //   return rest
  const filtered: Record<keyof any, unknown> = {}
  for (const key in sec) {
    if (key !== 'tasks') {
      filtered[key] = sec[key]
    }
  }
  return filtered
})

