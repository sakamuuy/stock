import styled from "styled-components";
import { spacing } from "../../../design/spacing";
import { ArticleDate } from "../../atoms/ArticleDate";
import { ArticleMv } from "../../atoms/ArticleMV";
import { ArticleTitle } from "../../atoms/ArticleTitle";
import { ArticleBody } from "../../molecules/ArticleBody";

export type Props = {
  title: string
  body: string
}

const BodyBox = styled.div`
  margin-top: ${spacing[24]};
`

export function Presentation({ title, body }: Props) {
  return (
    <div>
      <ArticleTitle>
        {title}
      </ArticleTitle>
      <ArticleDate>
        2021-02-18
      </ArticleDate>
      <ArticleMv src='/sample.png' />
      <BodyBox>
        <ArticleBody>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </ArticleBody>
      </BodyBox>
    </div>
  )
}