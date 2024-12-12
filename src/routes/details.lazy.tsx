import { createLazyFileRoute } from '@tanstack/react-router'
import Details from '../pages/Details'

export const Route = createLazyFileRoute('/details')({
  component: DetailsPage,
})

function DetailsPage() {
  return <Details />
}