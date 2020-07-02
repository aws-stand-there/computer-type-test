import React from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import LinkButton from '../styles/LinkButton';

const Title = styled.p`
    margin: 0;
    padding: 8rem 4rem 0rem;
    
    text-align: left;

    font-size: 1.6rem;
`;

const ResultText = styled.p`
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 0;
`;

const ModelText = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: gray;
    margin-top: 0;
`;

const Image = styled.img`
    position: absolute;
    top: 50px;
    opacity: 0.1;
    user-select: none;
`;

const Description = styled.p`
    padding: 0rem 2rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 3rem;
`;

const GradientSpan = styled.span`
    background: -webkit-linear-gradient(left, #55ff55, #55ffff);
    background:    -moz-linear-gradient(right, #55ff55, #55ffff);
    background:      -o-linear-gradient(right, #55ff55, #55ffff);
    background:         linear-gradient(to right, #55ff55, #55ffff);
`;

const RGBGradientSpan = styled.span`
    background: -webkit-linear-gradient(left, #005C97, #363795);
    background:    -moz-linear-gradient(right, #005C97, #363795);
    background:      -o-linear-gradient(right, #005C97, #363795);
    background:         linear-gradient(to right, #005C97, #363795);
    color :white;
    font-weight: 600;
    padding: 0 0.4rem;
`;

function ResultSlide({ selectedOptions }) {
    const score = selectedOptions
        .map(selected => selected.optionId)
        .map(optionId => optionId === 0 ? 1 : 0)
        .reduce((prev, current) => prev + current, 0);

    const renderResult = (score) => {
        if (score >= 4) {
            return renderResultTypeA();
        } else if (score >= 2) {
            return renderResultTypeB();
        }

        return renderResultTypeC();
    }
    
    const renderResultTypeA = () => (
        <div>
            <ResultText>게이밍 컴퓨터</ResultText>
            <ModelText>WZ39-CF96M5VX-CE6 / O2</ModelText>
            
            <Image draggable="false" src="http://withuspc.com/ERP/upload/Product/7771/%B8%F3%C7%E3.jpg" />
            
            <Description>
            <GradientSpan>화려한 조명이 나를 감싸네~</GradientSpan> 어딜가나 앞에 나서길 좋아하는 당신! <br />
            당신은 <b>주목 받는 것을 즐기고 분위기를 주도하는 것을 선호하는 타입</b>입니다. <br /> <br />
            이런 당신에게 추천하는 위더스 컴퓨터는 게이밍 모델인 WZ39-CF96M5VX-CE6/O2 입니다! <br/>
            <br/>
            LED 수냉쿨러가 탑재 되어 있어 화려한 빛을 내뿜으면서 CPU의 발열을 줄여 원활하게 게임이 돌아가게 됩니다! <br/>
            또한 RTX2060의 고사양 그래픽 카드가 탑재 되어 빵빵한 화질로 깔끔하게 게임이 돌아가는게 당신과 잘 맞아 떨어지네요! <br/>
            </Description>

            <ButtonWrapper>
                <LinkButton href="http://withuspc.com/02/01_view.php?nPage=&SearchType=&SearchKey=&MODE=VIEW&nPage=1&p_seq=7771">제품 보러가기</LinkButton>
            </ButtonWrapper>
        </div>
    );

    const renderResultTypeB = () => (
        <div>
            <ResultText>인텔 커피레이크</ResultText>
            <ModelText>WB36-C97M2T-W1 / O2</ModelText>
            
            <Image width="400" draggable="false" src="http://withuspc.com/ERP/upload/Product/8095/%C4%BF%C7%C7T3000.jpg" />
            
            <Description>
            이럴 때도 있고~ 저럴 때도 있고~ 앞에 나서는 성향과 뒤에서 보조하는 성향이 공존하는 당신! <b>상황에 따라 유동성 있게 움직이는 타입</b>입니다. <br/>
            이런 당신에게 추천하는 위더스 컴퓨터는 인텔 커피레이크 WB36-C97M2T-W1 / O2 입니다! <br/> <br/>
            외형은 심플한 디자인과 <RGBGradientSpan>느낌 있는 LED</RGBGradientSpan>의 조화가 돋보입니다! <br/>
            인텔 코어 i7으로 고사양게임과 용량이 큰 편집 프로그램 등도 렉 없이 원활하게 돌아 감과 동시에 간단한 문서 작업은 말 할 것도 없이 편-안 합니다. <br/>
            이러한 올라운더 기능이 당신과 잘 맞아 떨어지네요!
            </Description>

            <ButtonWrapper>
                <LinkButton href="http://withuspc.com/02/01_view.php?nPage=&SearchType=&SearchKey=&MODE=VIEW&nPage=1&p_seq=8095">제품 보러가기</LinkButton>
            </ButtonWrapper>
        </div>
    );

    const renderResultTypeC = () => (
        <div>
            <ResultText>모니보니 프로</ResultText>
            <ModelText>AL-K71S28G-PW / O2</ModelText>
            
            <Image width="400" draggable="false" src="https://withuspc.com/ERP/upload/Product/7798/2019%C7%C1%B7%CE%BC%AD%BF%EF%BE%EE%BF%F6%B5%E5.jpg" />
            
            <Description>
            부끄부끄 쑥쓰쑥쓰~ 조력자 마인드를 갖고 있는 당신! 당신은 앞에 나서기보단 뒤에서 <b>보조하는 역할을 더 선호하는 편</b>입니다. <br />
            <br />
            이런 당신에게 추천하는 위더스 컴퓨터는 모니보니 프로 AL-K71S28G-PW / O2 입니다! <br />
            <br />
            컴퓨터 앞에 앉아 자료조사를 하거나 발표 자료를 만들 때 화면을 돌려 세로로 문서작업을 하면 더욱 넓게 볼 수 있어서 일의 효율 UP! UP! <br/>
            또한 일체형으로 복잡한 전선 없이 심플하게 사용 가능한 점이 당신과 잘 맞아 떨어지네요! <br />
            </Description>

            <ButtonWrapper>
                <LinkButton href="https://withuspc.com/02/11_view.php?nPage=&SearchType=&SearchKey=&MODE=VIEW&nPage=1&p_seq=7798">제품 보러가기</LinkButton>
            </ButtonWrapper>
        </div>
    );

    return (
    <Container>
        <Title>당신에게 어울리는 컴퓨터는...</Title>

        {renderResult(score)}
    </Container>
    )
}

export default ResultSlide;
