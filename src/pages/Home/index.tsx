import {
  Book,
  CaretDown,
  Clock,
  LineSegments,
  PencilSimple,
  Plus,
  TrendDown,
  Trophy,
  User,
} from 'phosphor-react'

import { BarChart } from '../../components/BarChart'
import { Button } from '../../components/Button'
import { SimpleCard, Card } from '../../components/Card'
import { CircleIcon } from '../../components/CircleIcon'
import { DonutChart } from '../../components/DonutChart'
import { UserList } from '../../components/UserList'
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
        <SimpleCard className="card-students-total">
          <CircleIcon icon={User} variant="purple" />

          <div className="content">
            <h2>62</h2>
            <span>Students</span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-average">
          <CircleIcon icon={LineSegments} variant="green" />

          <div className="content">
            <h2>6.8</h2>
            <span>Average mark</span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-underperforming">
          <CircleIcon icon={TrendDown} variant="red" />

          <div className="content">
            <h2>
              9 <small>(14%)</small>
            </h2>
            <span>Underperforming students </span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-homeworks">
          <CircleIcon icon={Book} />

          <div className="content">
            <h2>83%</h2>
            <span>Finished homeworks</span>
          </div>
        </SimpleCard>

        <Card className="card-bar-chart">
          <header>
            <h3>Students number change per month</h3>

            <S.BarChatLegend>
              <span>Applied</span>
              <span>Left</span>
            </S.BarChatLegend>
          </header>

          <div className="content">
            <BarChart />
          </div>
        </Card>

        <Card className="card-students-list">
          <header>
            <h3>Students by average mark</h3>

            <S.SortButton type="button">
              Descending <CaretDown size={20} />
            </S.SortButton>
          </header>

          <div className="content">
            <UserList />
          </div>
        </Card>

        <Card className="card-donut-chart">
          <header>
            <h3>Students by type of studying</h3>
          </header>

          <div className="content">
            <DonutChart />

            <S.DonutChartLegend>
              <S.DonutChartLegendItem>
                <span>Groups of 20 students</span>
                <p>
                  20 <small>(32%)</small>
                </p>
              </S.DonutChartLegendItem>

              <S.DonutChartLegendItem>
                <span>Groups of 10 students</span>
                <p>
                  20 <small>(32%)</small>
                </p>
              </S.DonutChartLegendItem>

              <S.DonutChartLegendItem>
                <span>Groups of 5 students</span>
                <p>
                  15 <small>(24%)</small>
                </p>
              </S.DonutChartLegendItem>

              <S.DonutChartLegendItem>
                <span>Groups of 20 students</span>
                <p>
                  7 <small>(12%)</small>
                </p>
              </S.DonutChartLegendItem>
            </S.DonutChartLegend>
          </div>
        </Card>

        <SimpleCard className="card-lections-left">
          <CircleIcon icon={Trophy} variant="yellow" />

          <div className="content">
            <h2>25</h2>
            <span>Lections left</span>
          </div>
        </SimpleCard>

        <SimpleCard className="card-hours-spent">
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
