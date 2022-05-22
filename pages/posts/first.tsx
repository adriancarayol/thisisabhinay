import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const First: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>First Page XO</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}

export default First;
