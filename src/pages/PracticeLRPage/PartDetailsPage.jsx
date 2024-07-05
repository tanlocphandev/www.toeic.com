import { practices } from '@/mock/practice.mock';
import { tests } from '@/mock/test.mock';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import PartThree from './components/PartThree';
import PartFour from './components/PartFour';
import PartFive from './components/PartFive';
import PartSix from './components/PartSix';
import PartSeven1 from './components/PartSeven1';
import PartSeven2 from './components/PartSeven2';
import PartSeven3 from './components/PartSeven3';
import { Link } from "react-router-dom";
import QuestionQuantity from '@/components/shared/PartTest/QuestionQuantity';

const PartDetailsPage = () => {
    const { id, partId, testId } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id || !partId) return;

        const _dataPart = practices.find(t => t.slug === partId);

        const _data = tests.find(t => t.id === parseInt(id));

        if (!_data) {
            navigate(-1);
            return;
        }

        setData({ ..._data, part: _dataPart.part })
    }, [id, partId])

    const _partId = useMemo(() => {
        const parts = String(partId).split('-');
        return parts[parts.length - 1].slice(1, parts.length);
    }, [partId])



    const renderPart = useMemo(() => (part) => {
        // console.log({ part, testId });

        switch (part >= 7 ? _partId : part) {
            case 1:
                return <PartOne />
            case 2:
                return <PartTwo />
            case 3:
                return <PartThree />
            case 4:
                return <PartFour />
            case 5:
                return <PartFive />
            case 6:
                return <PartSix />
            case "71":
                return <PartSeven1 />
            case "72":
                return <PartSeven2 />
            case "73":
                return <PartSeven3 />

            default:
                return 'Không tìm thấy...'
        }
    }, [_partId])


    return (
        <div className="max-w-6xl mx-auto p-2">
            <div className="flex justify-center mt-4">
                <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                    Practice Set TOEIC 2020 Test {testId}
                </h1>
                <Link to={`/practice-lc-rc/${testId}`}>
                    <button className="bg-[#e3faff] py-1 border border-[#34447c] text-black px-2 rounded-lg ml-4 hover:bg-[#34447c] hover:text-white">Thoát</button>
                </Link>
            </div>

            <div className="flex justify-between mt-10">
                <div className="flex justify-between flex-col w-[80%] mr-2 ">
                    {data ? renderPart(data?.part || 1) : 'Loading...'}
                </div>

                {
                    data ? <div className="w-[20%]">
                        < QuestionQuantity partId={id >= 7 ? _partId : id} />
                    </div> : null
                }
            </div>
        </div>
    )
}

export default PartDetailsPage;