import Card from '@/components/Parts/Card'
import { Content } from '@/types/microcms'
import React from 'react'
import renderer from 'react-test-renderer'

describe('Card', (): void => {
  const titleOrName = 'Title Name'
  const at = '2021-01-13T08:51:18.019Z'

  test('tag none', () => {
    const content: Content = {
      id: '1',
      createdAt: at,
      updatedAt: at,
      publishedAt: at,
      revisedAt: at,
      tags: [],
      title: titleOrName,
      description: '',
      body: '',
    }
    const component = renderer.create(<Card content={content} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('tag single', () => {
    const content: Content = {
      id: '1',
      createdAt: at,
      updatedAt: at,
      publishedAt: at,
      revisedAt: at,
      tags: [
        {
          id: '1',
          name: titleOrName,
          createdAt: at,
          updatedAt: at,
          publishedAt: at,
          revisedAt: at,
        },
      ],
      title: titleOrName,
      description: '',
      body: '',
    }
    const component = renderer.create(<Card content={content} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('tag multiple', () => {
    const content: Content = {
      id: '1',
      createdAt: at,
      updatedAt: at,
      publishedAt: at,
      revisedAt: at,
      tags: [
        {
          id: '1',
          name: titleOrName,
          createdAt: at,
          updatedAt: at,
          publishedAt: at,
          revisedAt: at,
        },
        {
          id: '2',
          name: titleOrName,
          createdAt: at,
          updatedAt: at,
          publishedAt: at,
          revisedAt: at,
        },
      ],
      title: titleOrName,
      description: '',
      body: '',
    }
    const component = renderer.create(<Card content={content} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
