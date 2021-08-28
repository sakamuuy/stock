import styled from "styled-components";
import { spacing } from "../../../design/spacing";
import { ArticleDate } from "../../atoms/ArticleDate";
import { ArticleMv } from "../../atoms/ArticleMV";
import { ArticleTitle } from "../../atoms/ArticleTitle";
import { ArticleBody } from "../../molecules/ArticleBody";

type Props = {
  title: string
  body: string
}

const BodyBox = styled.div`
  margin-top: ${spacing[24]};
`

export function Article({ title, body }: Props) {
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui neque, sagittis nec semper nec, tempus ac turpis. Morbi nec massa in nulla consectetur pretium ac nec leo. Nullam nisi augue, hendrerit auctor risus sed, sollicitudin fringilla dui. Quisque eu tellus dignissim, eleifend est vel, viverra arcu. Vestibulum ut ipsum in felis hendrerit gravida. Etiam sed ante sed dui volutpat porttitor sit amet id orci. In justo libero, hendrerit ut tortor nec, viverra malesuada dolor. Curabitur dapibus vehicula diam quis bibendum.
  Fusce sapien ligula, fringilla vel fermentum vitae, iaculis ac risus. Proin gravida euismod nisl, ut tincidunt augue mollis sit amet. Phasellus ultricies nisi at est venenatis, in tincidunt odio maximus. Aenean nec rutrum tortor, eu accumsan felis. Integer condimentum dapibus felis eget lobortis. Cras et semper est. Fusce convallis tortor magna, et sodales justo eleifend ut.
        </ArticleBody>
      </BodyBox>
    </div>
  )
}