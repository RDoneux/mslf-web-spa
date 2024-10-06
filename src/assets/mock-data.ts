import { IPoem } from '../routes/poems/interfaces/IPoem';

export const poemsPage: IPoem[] = [
  {
    author: 'James Smith',
    id: '22bd3a09-f3a2-430d-a061-48326bc2f395',
    image:
      'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    timeToRead: '12 minute read',
    dateCreated: new Date(),
    content: `
Soaked for a time
and a
feeling of cold
rain and perfectly at
peace.

So want to dance naked
In the rain but
society tells me no…
too much pleasure is
not allowed and
too much joy is
frowned upon.
Only a small amount of
fun will be
tolerated.

Tuck your clothes in and
Put your urges
away.`,
    title: 'Soaked for a Time'
  },
  {
    author: 'James Smith',
    id: '6c237b57-db56-43a6-b5b2-1c0b8dd2bdbd',
    image:
      'https://images.pexels.com/photos/783737/pexels-photo-783737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    timeToRead: '5 minute read',
    dateCreated: new Date(),
    content: `
Falls from a utopia
are a regular occurrence.
Really too hard to prevent
my autistic body
from being involved
in some disaster.
Preventing the worst
from happening uses
all my strength.
When the inevitable occurs
my heart sinks like a stone
to the bottom of the river
where it remains until the next
fall from grace.`,
    title: 'Falls From Grace'
  }
];
