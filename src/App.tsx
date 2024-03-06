import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import md5 from 'md5'

const result = {
  all: [
    { text: '努力付出的努力將在未來五年內開花結果，專注於目標將帶來豐碩的成果。' },
    { text: '謹慎的決策和積極的行動將在接下來的五年中為你打開新的機會之門。' },
    { text: '經濟方面的穩步增長將為你創造穩定的生活基礎，著重理財將帶來豐盛的收穫。' },
    { text: '與他人合作和建立更深厚的人際關係將是未來五年中取得成功的關鍵。' },
    { text: '在愛情方面，懂得傾聽並珍惜對方的付出將使你的感情更加穩固和美滿。' },
    { text: '保持冷靜和靈活的心態，面對挑戰將為你帶來成長和智慧。' },
    { text: '尋找新的學習機會和不斷提升自己的能力將為事業帶來長遠的發展。' },
    { text: '謹慎思考未來計劃，有計畫的行動將為你帶來事半功倍的效果。' },
    { text: '保持積極樂觀的心態，即使面臨困難，也能找到解決問題的方法。' },
    { text: '善用人際網絡和社交能力，將有助於你在職場上取得更多的機會和支持。' },
    { text: '專注於個人成長和提升自我價值，將在未來五年中取得令人矚目的成就。' },
    { text: '擁有清晰的目標和堅定的決心，將為你實現夢想提供強大的動力。' },
    { text: '將注意力集中在健康和福祉上，保持身心平衡將帶來更多的幸福和滿足感。' },
    { text: '機會往往藏在挑戰之中，勇敢迎接挑戰將為你帶來更多的成長和收穫。' },
    { text: '在人際互動中展現真誠和善意，將吸引更多正能量進入你的生活。' },
    { text: '尋找平衡和和諧，不要讓壓力影響到你的身心健康和人際關係。' },
    { text: '善用創造力和想像力，將有助於你在工作和生活中獲得更多的樂趣和滿足感。' },
    { text: '堅持追求夢想，即使路途曲折，也能在未來五年中實現自己的理想。' },
    { text: '勇於嘗試新事物和挑戰，將為你帶來豐富的人生體驗和成就感。' },
    { text: '保持開放的心態，願意接受變化將使你在未來五年中更加順利達成目標。' },
  ],
  love: [
    { text: '愛情中將遇到新的契機和可能性，敞開心扉迎接戀愛的美好時刻。' },
    { text: '尋找平衡並展現理解，將有助於你與伴侶之間建立更加穩固的感情基礎。' },
    { text: '投入更多時間和精力與伴侶相處，將加深你們之間的感情連結。' },
    { text: '尊重彼此的獨立性和空間，將有助於維持健康而穩定的感情關係。' },
    { text: '善用溝通技巧，將促進你與伴侶之間的理解和互信，增進感情的穩定性。' },
    { text: '珍惜並表達對伴侶的感激之情，將使你們的感情更加充實和幸福。' },
    { text: '擁有共同的目標和夢想，將加強你與伴侶之間的共鳴和連結。' },
    { text: '展現愛意和關懷，將在愛情中燃起浪漫的火花，使感情更加甜蜜。' },
    { text: '尊重對方的意見和價值觀，將有助於減少不必要的爭執和誤解。' },
    { text: '在愛情中保持新鮮感，尋找共同的興趣和活動，增進感情的深度。' },
    { text: '理解對方的需求和期望，將有助於建立更加穩固和持久的愛情基石。' },
    { text: '給予對方足夠的信任和支持，將有助於愛情的長久和美滿。' },
    { text: '勇敢表達自己的感受和需求，將有助於維持健康而開放的感情溝通。' },
    { text: '在愛情中保持開放的心態，願意嘗試新的事物和體驗，豐富感情生活。' },
    { text: '保持愛情中的新奇感，重拾初戀的激情，將使感情更加充滿活力。' },
    { text: '傾聽並理解對方的需求，將有助於建立更加和諧的愛情關係。' },
    { text: '在愛情中保持真實和誠實，將有助於打造堅實而持久的感情基礎。' },
    { text: '尋找和伴侶之間的共同點，建立更加深厚的情感連結，使愛情更加堅固。' },
    { text: '在愛情中展現耐心和體諒，將有助於緩解衝突並加強感情的穩定性。' },
    { text: '保持對愛情的信心，即使面臨挑戰，也能攜手克服，使感情更加堅韌。' },
  ],
  work: [
    { text: '在事業上展現出色的表現將為你帶來更多的機會和升遷的可能。' },
    { text: '積極主動參與團隊合作和專業培訓，將為你的事業發展提供強大的支持。' },
    { text: '注重技能的提升和學習新知識，將使你在職場上更具競爭力。' },
    { text: '與同事和上級保持良好的關係，將有助於在工作中獲得更多的支持和機會。' },
    { text: '在工作中展現出色的專業態度和責任心，將贏得同事和上司的讚譽。' },
    { text: '擁有清晰的職業目標和規劃，將有助於你在事業上取得更大的成就。' },
    { text: '主動參與專業社群和行業活動，擴展人脈將有助於事業的發展。' },
    { text: '挑戰自己，勇於接受新的工作項目和責任，將帶來事業的更大突破。' },
    { text: '注重團隊協作和合作精神，將有助於你在團隊中扮演更重要的角色。' },
    { text: '保持積極樂觀的態度，即使面臨困難，也能找到解決問題的有效方法。' },
    { text: '善用自己的特長和技能，將為你在工作中贏得更多的肯定和機會。' },
    { text: '建立自己的專業品牌和聲望，將為事業的長遠發展提供有力的支持。' },
    { text: '積極參與項目和任務，展現出色的工作表現，將引起上司的注意。' },
    { text: '保持與時俱進，不斷學習和適應新的技術和趨勢，將保持競爭優勢。' },
    { text: '與同事建立良好的合作關係，共同努力將事業推向新的高峰。' },
    { text: '勇於接受挑戰和風險，將有助於你在事業上取得更大的成就。' },
    { text: '保持良好的工作與生活平衡，將有助於提高工作效率和生產力。' },
    { text: '注重人際關係，與同事建立和諧的合作氛圍，將有助於事業的順利進展。' },
    { text: '善用人脈和社交技能，將有助於你在事業上取得更多的支持和機會。' },
    { text: '擁有自信心和決斷力，勇敢追求事業目標，將在未來五年中取得成功。' },
  ],
}

function hash({ year, month, day }: { year: string; month: string; day: string }, salt: string): number {
  const dataToHash = `${year}-${month}-${day}-${salt}`

  const hashHex = md5(dataToHash)

  return parseInt(hashHex, 16)
}

const getDaysByYearAndMonth = (year: string, month: string) => {
  switch (month) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
      return 31
    case '4':
    case '6':
    case '9':
    case '11':
      return 30
    case '2': {
      const withYear = Number(year)

      if (withYear % 4 !== 0) {
        return 28
      }

      if (withYear % 100 !== 0) {
        return 29
      }

      return withYear % 400 !== 0 ? 28 : 29
    }
    default:
      throw new Error('Invalid month')
  }
}

function Field({
  label,
  value,
  setValue,
  options,
}: {
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  options: Array<{ label: string; value: string }>
}) {
  return (
    <>
      <div>{label}</div>
      <div>
        <select className="form-select" value={value} onChange={({ target }) => setValue(target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

function Result({ category, content }: { category: string; content: { text: string } }) {
  return (
    <div>
      <h4>{category}</h4>
      <div>{content.text}</div>
    </div>
  )
}

function App() {
  const current = useMemo(() => new Date(), [])

  const [year, setYear] = useState(String(current.getFullYear()))
  const [month, setMonth] = useState('1')
  const [day, setDay] = useState('1')

  const [appliedYear, setAppliedYear] = useState(String(current.getFullYear()))
  const [appliedMonth, setAppliedMonth] = useState('1')
  const [appliedDay, setAppliedDay] = useState('1')

  const [showResult, setShowResult] = useState(false)

  const handleSubmit = () => {
    setAppliedYear(year)
    setAppliedMonth(month)
    setAppliedDay(day)
    setShowResult(true)
  }

  return (
    <div
      style={{
        paddingTop: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 8px', alignItems: 'center' }}>
        <Field
          label="出生年份"
          value={year}
          setValue={setYear}
          options={new Array(100)
            .fill(undefined)
            .map((_, index) => String(current.getUTCFullYear() - index))
            .map((value) => ({ label: value, value }))}
        />
        <Field
          label="出生月份"
          value={month}
          setValue={setMonth}
          options={new Array(12)
            .fill(undefined)
            .map((_, index) => String(index + 1))
            .map((value) => ({ label: value, value }))}
        />
        <Field
          label="出生日期"
          value={day}
          setValue={setDay}
          options={new Array(getDaysByYearAndMonth(year, month))
            .fill(undefined)
            .map((_, index) => String(index + 1))
            .map((value) => ({ label: value, value }))}
        />
      </div>
      <button className="btn" onClick={handleSubmit} style={{ marginTop: 12 }}>
        幫我算命！
      </button>
      {showResult && (
        <div style={{ width: '80%' }}>
          <div className="divider" style={{ width: '100%' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
            <h3>
              {appliedYear}/{appliedMonth}/{appliedDay} 運勢
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Result
                category="整體運勢"
                content={
                  result.all[
                    hash({ year: appliedYear, month: appliedMonth, day: appliedDay }, 'all') % result.all.length
                  ]
                }
              />
              <Result
                category="愛情運勢"
                content={
                  result.love[
                    hash({ year: appliedYear, month: appliedMonth, day: appliedDay }, 'love') % result.all.length
                  ]
                }
              />
              <Result
                category="事業運勢"
                content={
                  result.work[
                    hash({ year: appliedYear, month: appliedMonth, day: appliedDay }, 'work') % result.all.length
                  ]
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
