import {
  Book,
  Clock,
  LineSegments,
  PencilSimple,
  Plus,
  TrendDown,
  Trophy,
  User,
} from 'phosphor-react'

import { Button } from '../../components/Button'
import { SimpleCard, Card } from '../../components/Card'
import { CircleIcon } from '../../components/CircleIcon'
import * as S from './styles'

export function Home() {
  return (
    <div>
      <S.Header>
        <S.HeaderContent>
          <h1>Dashboard</h1>
          <span>Mobile UX/UI Design course</span>
        </S.HeaderContent>

        <S.HeaderActions>
          <Button type="button" outline>
            <PencilSimple size={20} />
            Manage dashboard
          </Button>

          <Button type="button">
            <Plus size={20} />
            Create new dashboard
          </Button>
        </S.HeaderActions>
      </S.Header>

      <S.Grid>
        <SimpleCard className="card-one">
          <CircleIcon icon={User} variant="purple" />

          <div className="content">
            <h2>62</h2>
            <span>Students</span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-two">
          <CircleIcon icon={LineSegments} variant="green" />

          <div className="content">
            <h2>6.8</h2>
            <span>Average mark</span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-three">
          <CircleIcon icon={TrendDown} variant="red" />

          <div className="content">
            <h2>
              9 <small>(14%)</small>
            </h2>
            <span>Underperforming students </span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-four">
          <CircleIcon icon={Book} />

          <div className="content">
            <h2>83%</h2>
            <span>Finished homeworks</span>
          </div>
        </SimpleCard>

        <Card className="card-five">
          <header>
            <h3>Students number change per month</h3>
          </header>
        </Card>

        <Card className="card-six">
          <header>
            <h3>Students by average mark</h3>
          </header>
        </Card>

        <Card className="card-seven">
          <header>
            <h3>Students by type of studying</h3>
          </header>
        </Card>

        <SimpleCard className="card-eight">
          <CircleIcon icon={Trophy} variant="yellow" />

          <div className="content">
            <h2>25</h2>
            <span>Lections left</span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-nine">
          <CircleIcon icon={Clock} />

          <div className="content">
            <h2>139</h2>
            <span>Hours spent on lections</span>
          </div>
        </SimpleCard>
      </S.Grid>
    </div>
  )
}
