import { Account, Notification, Status, Application } from 'megalodon'
import Notifications, { NotificationsState, MUTATION_TYPES } from '@/store/TimelineSpace/Contents/Notifications'

const account1: Account = {
  id: '1',
  username: 'h3poteto',
  acct: 'h3poteto@pleroma.io',
  display_name: 'h3poteto',
  locked: false,
  created_at: '2019-03-26T21:30:32',
  followers_count: 10,
  following_count: 10,
  statuses_count: 100,
  note: 'engineer',
  url: 'https://pleroma.io',
  avatar: '',
  avatar_static: '',
  header: '',
  header_static: '',
  emojis: [],
  moved: null,
  fields: null,
  bot: false
}

const account2: Account = {
  id: '2',
  username: 'h3poteto',
  acct: 'h3poteto@mstdn.io',
  display_name: 'h3poteto',
  locked: false,
  created_at: '2019-03-26T21:30:32',
  followers_count: 10,
  following_count: 10,
  statuses_count: 100,
  note: 'engineer',
  url: 'https://mstdn.io',
  avatar: '',
  avatar_static: '',
  header: '',
  header_static: '',
  emojis: [],
  moved: null,
  fields: null,
  bot: false
}

const status1: Status = {
  id: '1',
  uri: 'http://example.com',
  url: 'http://example.com',
  account: account1,
  in_reply_to_id: null,
  in_reply_to_account_id: null,
  reblog: null,
  content: 'hoge',
  created_at: '2019-03-26T21:40:32',
  emojis: [],
  replies_count: 0,
  reblogs_count: 0,
  favourites_count: 0,
  reblogged: null,
  favourited: null,
  muted: null,
  sensitive: false,
  spoiler_text: '',
  visibility: 'public',
  media_attachments: [],
  mentions: [],
  tags: [],
  card: null,
  poll: null,
  application: {
    name: 'Web'
  } as Application,
  language: null,
  pinned: null
}

const status2: Status = {
  id: '2',
  uri: 'http://example.com',
  url: 'http://example.com',
  account: account1,
  in_reply_to_id: null,
  in_reply_to_account_id: null,
  reblog: null,
  content: 'hoge',
  created_at: '2019-03-26T21:40:32',
  emojis: [],
  replies_count: 0,
  reblogs_count: 0,
  favourites_count: 0,
  reblogged: null,
  favourited: null,
  muted: null,
  sensitive: false,
  spoiler_text: '',
  visibility: 'public',
  media_attachments: [],
  mentions: [],
  tags: [],
  card: null,
  poll: null,
  application: {
    name: 'Web'
  } as Application,
  language: null,
  pinned: null
}

const rebloggedStatus: Status = {
  id: '3',
  uri: 'http://example.com',
  url: 'http://example.com',
  account: account1,
  in_reply_to_id: null,
  in_reply_to_account_id: null,
  reblog: status2,
  content: 'hoge',
  created_at: '2019-03-26T21:40:32',
  emojis: [],
  replies_count: 0,
  reblogs_count: 0,
  favourites_count: 0,
  reblogged: null,
  favourited: null,
  muted: null,
  sensitive: false,
  spoiler_text: '',
  visibility: 'public',
  media_attachments: [],
  mentions: [],
  tags: [],
  card: null,
  poll: null,
  application: {
    name: 'Web'
  } as Application,
  language: null,
  pinned: null
}

const notification1: Notification = {
  id: '1',
  account: account2,
  status: status1,
  type: 'favourite',
  created_at: '2019-04-01T17:01:32'
}

const notification2: Notification = {
  id: '2',
  account: account2,
  status: rebloggedStatus,
  type: 'mention',
  created_at: '2019-04-01T17:01:32'
}

describe('TimelineSpace/Contents/Notifications', () => {
  describe('mutations', () => {
    let state: NotificationsState

    describe('deleteToot', () => {
      beforeEach(() => {
        state = {
          lazyLoading: false,
          heading: true,
          notifications: [notification2, notification1],
          unreadNotifications: [],
          filter: ''
        }
      })
      describe('message is not reblogged', () => {
        it('should be deleted', () => {
          Notifications.mutations![MUTATION_TYPES.DELETE_TOOT](state, notification1.status!.id)
          expect(state.notifications.length).toEqual(1)
        })
      })
      describe('message is reblogged', () => {
        it('should be deleted', () => {
          Notifications.mutations![MUTATION_TYPES.DELETE_TOOT](state, notification2.status!.id)
          expect(state.notifications.length).toEqual(1)
        })
      })
    })
  })
})