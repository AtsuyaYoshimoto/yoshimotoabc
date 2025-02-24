import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Element = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element"
      style={{
        display:
          screenWidth < 1248
            ? "flex"
            : screenWidth >= 1248
              ? "inline-flex"
              : undefined,
        gap: screenWidth < 1248 ? "10px" : undefined,
        height: screenWidth < 1248 ? "15725px" : undefined,
        minWidth: screenWidth < 1248 ? "375px" : undefined,
        padding:
          screenWidth < 1248
            ? "16px 8px"
            : screenWidth >= 1248
              ? "25px 19px"
              : undefined,
      }}
    >
      {screenWidth < 1248 && (
        <>
          <div className="overlap-wrapper">
            <div className="overlap">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-8034.png"
              />

              <div className="group">
                <div className="overlap-group">
                  <div className="div" />

                  <div className="text-wrapper">
                    たった30日でオンライン売上が2倍に！？
                  </div>
                </div>
              </div>

              <div className="text-wrapper-2">Smart Growth</div>

              <img
                className="img"
                alt="Rectangle"
                src="/img/rectangle-8040.svg"
              />

              <div className="text-wrapper-3">営業経験ゼロでも成果を出す</div>

              <img
                className="rectangle-2"
                alt="Rectangle"
                src="/img/rectangle-8041-1.svg"
              />

              <div className="text-wrapper-4">オンラインセミナー</div>

              <div className="component">
                <div className="text">お問い合わせはこちら</div>
              </div>

              <div className="text-wrapper-5">
                個人起業家・副業初心者が、
                <br />
                最小限の労力で安定収益を得るための実践型プログラム
              </div>
            </div>
          </div>

          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-6">
                  こんなお悩み、
                  <br />
                  ありませんか？
                </div>

                <div className="frame-3">
                  <img
                    className="rectangle-3"
                    alt="Rectangle"
                    src="/img/rectangle-8051.png"
                  />

                  <div className="frame-4">
                    <div className="frame-5">
                      <div className="text-wrapper-7">
                        SNSを頑張って更新しても、フォロワーも売上も増えない…
                      </div>
                    </div>

                    <div className="frame-5">
                      <div className="text-wrapper-8">
                        “売り込み感”を出したくないあまり、結果的に何も宣伝できていない
                      </div>
                    </div>

                    <div className="frame-5">
                      <div className="text-wrapper-8">
                        副業を始めたけれど、時間ばかりかかって収益が追いつかない
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-6">
            <div className="frame-7">
              <div className="frame-8">
                <div className="istock" />

                <div className="rectangle-4" />

                <div className="frame-9">
                  <div className="frame-10">
                    <div className="text-wrapper-9">
                      今のやり方を続けていて、本当に結果は変わるでしょうか？
                      <br />
                      もしこのまま何も変えなかったら、半年後・1年後、あなたはどうなっていると思いますか？
                    </div>

                    <div className="text-wrapper-10">
                      もしこのような状況なら、
                      <br />
                      危険信号かもしれません。
                    </div>
                  </div>

                  <div className="frame-11">
                    <div className="frame-12">
                      <div className="text-wrapper-11">⭕</div>

                      <p className="SNS">
                        <span className="span">
                          SNS発信を続けているけど、成果が出ない
                          <br />
                        </span>

                        <span className="text-wrapper-12">
                          「毎日投稿を頑張っているけど、フォロワーは増えないし、問い合わせもゼロ。 “とりあえずやる”だけになっていて、何が悪いのかわからない。」
                        </span>
                      </p>
                    </div>

                    <div className="frame-12">
                      <div className="text-wrapper-11">⭕</div>

                      <p className="p">
                        <span className="span">
                          時間ばかりかかるのに、売上が増えない
                          <br />
                        </span>

                        <span className="text-wrapper-12">
                          「広告を出してみたり、無料のノウハウを試してみたり…。 でも、どれもイマイチ手応えがなく、むしろ広告費や時間だけが消えていく。」
                        </span>
                      </p>
                    </div>

                    <div className="frame-12">
                      <div className="text-wrapper-11">⭕</div>

                      <p className="div-2">
                        <span className="span">
                          「やっぱり無理だった」と諦めてしまう
                          <br />
                        </span>

                        <span className="text-wrapper-12">
                          結局、収益も伸びないままモチベーションが下がってしまい、 “やっぱり自分には無理だったのか…”と、ビジネスをやめてしまう。
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paragraph-background">
                <p className="element-smart-growth">
                  今、あなたができる選択は2つだけです。
                  <br />① 何も変えずに、今のままの状態を続ける
                  <br />→
                  結果は変わらず、数か月後に「やっぱりダメだった…」と後悔するかもしれません。
                  <br />② 新しい方法を学び、成功するための道を選ぶ
                  <br />→ 「Smart
                  Growth」で最短ルートを手に入れ、たった30日で結果を変える。
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="overlap-2">
              <div className="frame-13">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle-5" />

                    <div className="smart-growth">
                      そこで生まれたのが、
                      <br />
                      “短期間で安定収益を実現する”
                      <br />
                      Smart Growthオンラインセミナー
                    </div>
                  </div>
                </div>

                <div className="text-wrapper-13">
                  オンライン集客と“売り込み不要”
                  <br />
                  の営業メソッドを掛け合わせた、
                  <br />
                  最短ルートで成果を出すためのプログラムです。
                </div>
              </div>

              <div className="heading" />
            </div>

            <div className="heading-2" />
          </div>

          <div className="section-2">
            <div className="frame-14">
              <div className="background">
                <img
                  className="background-2"
                  alt="Background"
                  src="/img/background-3.svg"
                />

                <div className="paragraph">
                  <p className="SNS-SNS-x-facebook">
                    📌「ただ投稿するだけ」ではなく、「売れる投稿」に変える
                    <br />
                    間違ったSNS発信 → 「投稿しているのに反応がない」
                    <br />
                    正しいSNS発信 →
                    「ターゲットに刺さる発信で、問い合わせが増える」
                    <br />📌 「お金をかけずにできるオンライン集客戦略」
                    <br />
                    インスタ・X・Facebook・LINE
                    どれを選ぶべきか？あなたに最適な戦略を提案
                    <br />
                    「忙しくて時間がない！」 → 1日5分でできるSNS自動化テクニック
                  </p>
                </div>

                <div className="background-border">
                  <div className="text-wrapper-14">Point 1</div>
                </div>

                <div className="container">
                  <div className="container-2">
                    <div className="text-wrapper-15">
                      短期間で成果を出せるノウハウ
                    </div>
                  </div>

                  <img className="shape" alt="Shape" src="/img/image.svg" />
                </div>
              </div>

              <div className="background">
                <img
                  className="background-2"
                  alt="Background"
                  src="/img/background-4.svg"
                />

                <div className="OK-zoom-LINE-wrapper">
                  <p className="OK-zoom-LINE">
                    📌「セールスが苦手でもOK！ “売れる流れ”をテンプレ化」
                    <br />
                    「いきなり売ろうとするから失敗する」 →
                    お客様が&#34;買いたくなる&#34;導線を作るだけ
                    <br />
                    お客様の本音を引き出す「質問スクリプト」 を用意 →
                    自然な流れで契約に繋がる
                    <br />
                    📌「オンラインでの成約率を2倍にする秘密」
                    <br />
                    Zoom・LINE・メール
                    など、オンライン上でのクロージング手法を徹底解説
                    <br />
                    あなたのサービスにピッタリな「売れるオファー」の作り方
                  </p>
                </div>

                <div className="background-border-2">
                  <div className="text-wrapper-14">Point 2</div>
                </div>

                <div className="container">
                  <div className="container-3">
                    <div className="text-wrapper-15">
                      “自然に成約”を
                      <br />
                      生む営業ステップ
                    </div>
                  </div>

                  <img className="shape" alt="Shape" src="/img/image.svg" />
                </div>
              </div>

              <div className="background">
                <img
                  className="background-3"
                  alt="Background"
                  src="/img/background-5.svg"
                />

                <div className="element-wrapper">
                  <p className="text-wrapper-16">
                    📌 「1回のセミナーで終わらせない！ 継続フォロー体制」
                    <br />
                    「学んだけど実践できない…」 → &#34;個別フォローアップ&#34;
                    で行動できる仕組み
                    <br />
                    実際にあなたのビジネスを見ながら、最適なアドバイスを提供
                    <br />
                    📌「あなた専用の成功プランを一緒に作る」
                    <br />
                    セミナー受講後 →
                    個別相談で&#34;あなたのための戦略&#34;を具体化
                    <br />
                    あなたのビジネスに合わせた&#34;オーダーメイド型&#34;のアドバイス
                  </p>
                </div>

                <div className="background-border-2">
                  <div className="text-wrapper-14">Point 3</div>
                </div>

                <div className="container">
                  <div className="container-3">
                    <div className="text-wrapper-15">
                      継続サポートで
                      <br />
                      失敗しない仕組み
                    </div>
                  </div>

                  <img className="shape" alt="Shape" src="/img/shape-5.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-15">
            <div className="frame-16">
              <div className="jpg" />

              <div className="frame-17">
                <div className="strong">01</div>

                <div className="text-wrapper-17">
                  あなたの強みを見極めるビジネス設計
                </div>

                <p className="text-wrapper-18">
                  “なんとなく” ではなく、“売れる” ビジネスモデルを作る」
                  <br />✅ あなたの強み × 市場ニーズをマッチさせるフレームワーク
                  <br />✅ 競争に巻き込まれない価格設定と商品パッケージの作り方
                  <br />✅ SNS・Googleを活用した簡単な市場リサーチ法
                  <br />🎯 得られる成果
                  <br />
                  √ 「売れる強み」が明確になり、無駄な努力をしなくなる
                  <br />
                  √ 市場・価格・商品設計の迷いがなくなり、ビジネスが加速
                </p>
              </div>
            </div>

            <div className="frame-16">
              <div className="img-jpg" />

              <div className="frame-17">
                <div className="strong-2">02</div>

                <div className="text-wrapper-17">
                  SNS×広告で“勝手に集客”を生み出す
                </div>

                <p className="text-wrapper-18">
                  「ただ投稿するだけではなく、“売れる仕組み”を作る」
                  <br />✅
                  あなたに最適なSNS・広告戦略の選び方（Instagram・LINE・Xなど）
                  <br />✅ 「売れる投稿」のテンプレート化と最小コストでの集客法
                  <br />✅
                  広告なしでフォロワーを増やすオーガニックマーケティング
                  <br />🎯 得られる成果
                  <br />
                  √ 「売り込みゼロ」でも、お客様が集まる導線が完成
                  <br />
                  √ SNSに振り回されず、効率的に見込み客を増やせる
                </p>
              </div>
            </div>

            <div className="frame-18">
              <div className="frame-19">
                <div className="jpg-2" />

                <div className="frame-20">
                  <div className="frame-21">
                    <div className="strong-3">03</div>

                    <div className="text-wrapper-17">
                      苦手な営業トークを“自然な提案”に変える
                    </div>

                    <p className="text-wrapper-18">
                      「売り込まずに、お客様から選ばれる営業術」
                      <br />✅ 成約率を2倍にする「お客様が買いたくなる質問」
                      <br />✅ 値下げなしで契約を取る「価格プレゼン術」
                      <br />✅ Zoom・LINE・対面での「自然なクロージング方法」
                      <br />🎯 得られる成果
                      <br />
                      √ 「営業が苦手…」を克服し、無理なく契約が取れるようになる
                      <br />
                      √ 口コミ・紹介が増え、安定した売上が作れる
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-22">
            <div className="frame-23">
              <div className="small-TRAINERS">TRAINERS</div>

              <div className="text-wrapper-19">
                経験豊富な
                <br />
                起業家たちが
                <br />
                サポートします
              </div>
            </div>

            <div className="frame-24">
              <div className="frame-25">
                <div className="figure-jpg" />

                <div className="text-wrapper-20">
                  事業開発プロデューサー <br /> シリアルアントレプレナー
                </div>
              </div>

              <div className="frame-25">
                <div className="figure-img-jpg" />

                <div className="text-wrapper-20">
                  マーケティング戦略責任者 <br />
                  起業家
                </div>
              </div>

              <div className="frame-25">
                <div className="figure-jpg-2" />

                <div className="text-wrapper-20">
                  スタートアップアドバイザー <br />
                  ビジネス成長戦略家
                </div>
              </div>
            </div>
          </div>

          <div className="frame-26">
            <div className="frame-27">
              <div className="text-wrapper-21">
                「実際に、こんな成果が続出しています！」
                <br />
                受講生がたった数ヶ月で
                <br />
                劇的に変化！
                <br />
                あなたも次の成功者になりませんか？
              </div>

              <img
                className="teamwork-with-team"
                alt="Teamwork with team"
                src="/img/teamwork-with-team-joining-their-efforts.png"
              />
            </div>

            <div className="frame-28">
              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Aさん（ハンドメイド作家）
                    </div>

                    <div className="frame-31">
                      <div className="program-jpg">
                        <div className="rectangle-6" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：月売上3万円
                          </div>

                          <div className="text-wrapper-24">
                            → After：2ヶ月で月売上10万円
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「SNS投稿のコツを掴んだら、問い合わせが
                            <br />
                            一気に増えました！」
                          </div>

                          <div className="text-wrapper-27">
                            →
                            お客様の声を拾って商品説明を改善しただけで、売上が急増！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Bさん（副業ウェブデザイナー）
                    </div>

                    <div className="frame-31">
                      <div className="rectangle-wrapper">
                        <div className="rectangle-7" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：クライアント獲得ゼロ
                          </div>

                          <div className="text-wrapper-24">
                            → After：3ヶ月で月収15万円
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「営業メールが苦手でしたが、テンプレートのおかげで成約率が倍に！」
                          </div>

                          <div className="text-wrapper-28">
                            →
                            無理なセールスをしなくても、自然に契約が決まるようになりました！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Cさん（パーソナルコーチ）
                    </div>

                    <div className="frame-31">
                      <div className="jpg-3">
                        <div className="rectangle-7" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：SNS発信をしても反応ゼロ
                          </div>

                          <div className="text-wrapper-29">
                            → After：フォロワー1,000人超え＆受講生10名獲得
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「フォロワーが増えるだけでなく、申し込みが来るようになったのが驚き！」
                          </div>

                          <div className="text-wrapper-28">
                            →
                            ただ投稿するだけだったSNSが、&#34;見込み客を集めるツール&#34;
                            に変わりました！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Dさん（オンラインスクール運営者）
                    </div>

                    <div className="frame-31">
                      <div className="jpg-4">
                        <div className="rectangle-7" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：無料相談で終わってしまう
                          </div>

                          <div className="text-wrapper-24">
                            → After：成約率40%アップ
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「価格を伝えるのが怖かったけど、自信を持って提案できるようになった！」
                          </div>

                          <div className="text-wrapper-28">
                            →
                            「お願いします！」と言われる機会が増え、安定した売上を確保！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-33">
            <div className="small-SUPERIORITY">SUPERIORITY</div>

            <p className="smart-growth-2">
              まずは無料ウェビナーから
              <br />
              お気軽にご参加ください。
              <br />
              他社と比較しても、
              <br />
              「Smart Growth」は
              <br /> “実践力” と “継続サポート”
              <br /> で圧倒的な強みがあります！
            </p>

            <img className="image" alt="Image" src="/img/image-2-2.png" />

            <div className="frame-34">
              <div className="text-wrapper-30">
                Smart Growth
                <br />
                導入までの流れ
              </div>

              <div className="text-wrapper-31">FLOW</div>

              <img className="image-2" alt="Image" src="/img/image-5.png" />
            </div>
          </div>

          <div className="frame-35">
            <div className="text-wrapper-32">
              今、この一歩があなたのビジネスを変えます
            </div>

            <div className="text-wrapper-33">
              “成功への最短ルート”を体感し、あなたのビジネスを
              <br />
              たった30日で加速させましょう。
            </div>

            <div className="frame-36">
              <div className="component-2">
                <div className="frame-37">
                  <img className="image-3" alt="Image" src="/img/image.png" />

                  <div className="text-2">無料ウェビナーを申し込む</div>
                </div>
              </div>

              <div className="component-3">
                <div className="text-3">お問い合わせはこちら</div>
              </div>
            </div>
          </div>
        </>
      )}

      {screenWidth >= 1248 && (
        <>
          <div className="frame-38">
            <div className="overlap-3">
              <div className="overlap-group-3">
                <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="/img/rectangle-8034.png"
                />

                <div className="rectangle-9" />

                <div className="rectangle-10" />

                <div className="text-wrapper-34">
                  たった30日でオンライン売上が2倍に！？
                </div>

                <div className="text-wrapper-35">
                  営業経験ゼロでも成果を出す
                </div>

                <img
                  className="rectangle-11"
                  alt="Rectangle"
                  src="/img/rectangle-8041-2.svg"
                />

                <div className="text-wrapper-36">オンラインセミナー</div>
              </div>

              <div className="text-wrapper-37">Smart Growth</div>

              <div className="text-wrapper-38">
                個人起業家・副業初心者が、
                <br />
                最小限の労力で安定収益を得るための実践型プログラム
              </div>

              <div className="component-4">
                <div className="text-4">お問い合わせはこちら</div>
              </div>
            </div>
          </div>

          <div className="frame-39">
            <div className="text-wrapper-39">こんなお悩み、ありませんか？</div>

            <div className="frame-40">
              <img
                className="rectangle-12"
                alt="Rectangle"
                src="/img/rectangle-8051.png"
              />

              <div className="frame-41">
                <div className="frame-5">
                  <div className="text-wrapper-40">
                    SNSを頑張って更新しても、フォロワーも売上も増えない…
                  </div>
                </div>

                <div className="frame-5">
                  <div className="text-wrapper-41">
                    “売り込み感”を出したくないあまり、結果的に何も宣伝できていない
                  </div>
                </div>

                <div className="frame-5">
                  <div className="text-wrapper-41">
                    副業を始めたけれど、時間ばかりかかって収益が追いつかない
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-42">
            <div className="frame-43">
              <div className="frame-44">
                <div className="istock" />

                <div className="frame-9">
                  <div className="frame-10">
                    <div className="text-wrapper-42">
                      今のやり方を続けていて、本当に結果は変わるでしょうか？
                      <br />
                      もしこのまま何も変えなかったら、半年後・1年後、あなたはどうなっていると思いますか？
                    </div>

                    <div className="text-wrapper-43">
                      もしこのような状況なら、危険信号かもしれません。
                    </div>
                  </div>

                  <div className="frame-11">
                    <div className="frame-45">
                      <div className="text-wrapper-11">⭕</div>

                      <p className="SNS">
                        <span className="span">
                          SNS発信を続けているけど、成果が出ない
                          <br />
                        </span>

                        <span className="text-wrapper-12">
                          「毎日投稿を頑張っているけど、フォロワーは増えないし、問い合わせもゼロ。 “とりあえずやる”だけになっていて、何が悪いのかわからない。」
                        </span>
                      </p>
                    </div>

                    <div className="frame-45">
                      <div className="text-wrapper-44">⭕</div>

                      <p className="div-3">
                        <span className="span">
                          時間ばかりかかるのに、売上が増えない
                          <br />
                        </span>

                        <span className="text-wrapper-12">
                          「広告を出してみたり、無料のノウハウを試してみたり…。 でも、どれもイマイチ手応えがなく、むしろ広告費や時間だけが消えていく。」
                        </span>
                      </p>
                    </div>

                    <div className="frame-45">
                      <div className="text-wrapper-44">⭕</div>

                      <p className="div-4">
                        <span className="span">
                          「やっぱり無理だった」と諦めてしまう
                          <br />
                        </span>

                        <span className="text-wrapper-12">
                          結局、収益も伸びないままモチベーションが下がってしまい、 “やっぱり自分には無理だったのか…”と、ビジネスをやめてしまう。
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="element-smart-growth-wrapper">
                <p className="element-smart-growth">
                  今、あなたができる選択は2つだけです。
                  <br />① 何も変えずに、今のままの状態を続ける
                  <br />→
                  結果は変わらず、数か月後に「やっぱりダメだった…」と後悔するかもしれません。
                  <br />② 新しい方法を学び、成功するための道を選ぶ
                  <br />→ 「Smart
                  Growth」で最短ルートを手に入れ、たった30日で結果を変える。
                </p>
              </div>
            </div>
          </div>

          <div className="frame-46">
            <div className="heading-3" />

            <div className="frame-47">
              <p className="smart-growth-3">
                <span className="text-wrapper-45">
                  そこで生まれたのが、 “短期間で安定収益を実現する”{" "}
                </span>

                <span className="text-wrapper-46">
                  Smart Growthオンラインセミナー
                </span>
              </p>

              <div className="text-wrapper-47">
                オンライン集客と“売り込み不要”
                <br />
                の営業メソッドを掛け合わせた、
                <br />
                最短ルートで成果を出すためのプログラムです。
              </div>
            </div>

            <div className="heading-3" />
          </div>

          <div className="section-3">
            <div className="frame-14">
              <div className="background-4">
                <img
                  className="background-5"
                  alt="Background"
                  src="/img/background-1.svg"
                />

                <div className="SNS-SNS-x-facebook-wrapper">
                  <p className="SNS-SNS-x-facebook-2">
                    📌「ただ投稿するだけ」ではなく、「売れる投稿」に変える
                    <br />
                    間違ったSNS発信 → 「投稿しているのに反応がない」
                    <br />
                    正しいSNS発信 →
                    「ターゲットに刺さる発信で、問い合わせが増える」
                    <br />📌 「お金をかけずにできるオンライン集客戦略」
                    <br />
                    インスタ・X・Facebook・LINE
                    どれを選ぶべきか？あなたに最適な戦略を提案
                    <br />
                    「忙しくて時間がない！」 → 1日5分でできるSNS自動化テクニック
                  </p>
                </div>

                <div className="background-border-3">
                  <div className="text-wrapper-14">Point 1</div>
                </div>

                <div className="container-4">
                  <div className="container-2">
                    <div className="text-wrapper-15">
                      短期間で成果を出せるノウハウ
                    </div>
                  </div>

                  <img className="shape" alt="Shape" src="/img/image.svg" />
                </div>
              </div>

              <div className="background-4">
                <img
                  className="background-5"
                  alt="Background"
                  src="/img/background.svg"
                />

                <div className="paragraph-2">
                  <p className="OK-zoom-LINE-2">
                    📌「セールスが苦手でもOK！ “売れる流れ”をテンプレ化」
                    <br />
                    「いきなり売ろうとするから失敗する」 →
                    お客様が&#34;買いたくなる&#34;導線を作るだけ
                    <br />
                    お客様の本音を引き出す「質問スクリプト」 を用意 →
                    自然な流れで契約に繋がる
                    <br />
                    📌「オンラインでの成約率を2倍にする秘密」
                    <br />
                    Zoom・LINE・メール
                    など、オンライン上でのクロージング手法を徹底解説
                    <br />
                    あなたのサービスにピッタリな「売れるオファー」の作り方
                  </p>
                </div>

                <div className="background-border-4">
                  <div className="text-wrapper-14">Point 2</div>
                </div>

                <div className="container-4">
                  <div className="container-3">
                    <div className="text-wrapper-15">
                      “自然に成約”を
                      <br />
                      生む営業ステップ
                    </div>
                  </div>

                  <img className="shape" alt="Shape" src="/img/shape-1-2.svg" />
                </div>
              </div>

              <div className="background-4">
                <img
                  className="background-6"
                  alt="Background"
                  src="/img/background-2-2.svg"
                />

                <div className="paragraph-3">
                  <p className="text-wrapper-48">
                    📌 「1回のセミナーで終わらせない！ 継続フォロー体制」
                    <br />
                    「学んだけど実践できない…」 → &#34;個別フォローアップ&#34;
                    で行動できる仕組み
                    <br />
                    実際にあなたのビジネスを見ながら、最適なアドバイスを提供
                    <br />
                    📌「あなた専用の成功プランを一緒に作る」
                    <br />
                    セミナー受講後 →
                    個別相談で&#34;あなたのための戦略&#34;を具体化
                    <br />
                    あなたのビジネスに合わせた&#34;オーダーメイド型&#34;のアドバイス
                  </p>
                </div>

                <div className="background-border-4">
                  <div className="text-wrapper-14">Point 3</div>
                </div>

                <div className="container-4">
                  <div className="container-3">
                    <div className="text-wrapper-15">
                      継続サポートで
                      <br />
                      失敗しない仕組み
                    </div>
                  </div>

                  <img className="shape" alt="Shape" src="/img/shape-2-2.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-48">
            <div className="frame-49">
              <div className="jpg-5" />

              <div className="frame-17">
                <div className="strong">01</div>

                <div className="text-wrapper-17">
                  あなたの強みを見極めるビジネス設計
                </div>

                <p className="text-wrapper-18">
                  “なんとなく” ではなく、“売れる” ビジネスモデルを作る」
                  <br />✅ あなたの強み × 市場ニーズをマッチさせるフレームワーク
                  <br />✅ 競争に巻き込まれない価格設定と商品パッケージの作り方
                  <br />✅ SNS・Googleを活用した簡単な市場リサーチ法
                  <br />🎯 得られる成果
                  <br />
                  √ 「売れる強み」が明確になり、無駄な努力をしなくなる
                  <br />
                  √ 市場・価格・商品設計の迷いがなくなり、ビジネスが加速
                </p>
              </div>
            </div>

            <div className="frame-50">
              <div className="frame-17">
                <div className="strong-2">02</div>

                <div className="text-wrapper-17">
                  SNS×広告で“勝手に集客”を生み出す
                </div>

                <p className="text-wrapper-18">
                  「ただ投稿するだけではなく、“売れる仕組み”を作る」
                  <br />✅
                  あなたに最適なSNS・広告戦略の選び方（Instagram・LINE・Xなど）
                  <br />✅ 「売れる投稿」のテンプレート化と最小コストでの集客法
                  <br />✅
                  広告なしでフォロワーを増やすオーガニックマーケティング
                  <br />🎯 得られる成果
                  <br />
                  √ 「売り込みゼロ」でも、お客様が集まる導線が完成
                  <br />
                  √ SNSに振り回されず、効率的に見込み客を増やせる
                </p>
              </div>

              <div className="jpg-6" />
            </div>

            <div className="frame-51">
              <div className="jpg-7" />

              <div className="frame-20">
                <div className="strong-3">03</div>

                <div className="text-wrapper-17">
                  苦手な営業トークを“自然な提案”に変える
                </div>

                <p className="text-wrapper-18">
                  「売り込まずに、お客様から選ばれる営業術」
                  <br />✅ 成約率を2倍にする「お客様が買いたくなる質問」
                  <br />✅ 値下げなしで契約を取る「価格プレゼン術」
                  <br />✅ Zoom・LINE・対面での「自然なクロージング方法」
                  <br />🎯 得られる成果
                  <br />
                  √ 「営業が苦手…」を克服し、無理なく契約が取れるようになる
                  <br />
                  √ 口コミ・紹介が増え、安定した売上が作れる
                </p>
              </div>
            </div>
          </div>

          <div className="frame-52">
            <div className="frame-53">
              <div className="small-TRAINERS">TRAINERS</div>

              <div className="text-wrapper-19">
                経験豊富な
                <br />
                起業家たちが
                <br />
                サポートします
              </div>
            </div>

            <div className="frame-54">
              <div className="frame-25">
                <div className="figure-jpg" />

                <div className="text-wrapper-20">
                  事業開発プロデューサー <br /> シリアルアントレプレナー
                </div>
              </div>

              <div className="frame-25">
                <div className="figure-img-jpg" />

                <div className="text-wrapper-20">
                  マーケティング戦略責任者 <br />
                  起業家
                </div>
              </div>

              <div className="frame-25">
                <div className="figure-jpg-2" />

                <div className="text-wrapper-20">
                  スタートアップアドバイザー <br />
                  ビジネス成長戦略家
                </div>
              </div>
            </div>
          </div>

          <div className="frame-55">
            <div className="frame-27">
              <div className="text-wrapper-49">
                「実際に、こんな成果が続出しています！」
                <br />
                受講生がたった数ヶ月で劇的に変化！
                <br />
                あなたも次の成功者になりませんか？
              </div>

              <img
                className="teamwork-with-team"
                alt="Teamwork with team"
                src="/img/teamwork-with-team-joining-their-efforts.png"
              />
            </div>

            <div className="frame-28">
              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Aさん（ハンドメイド作家）
                    </div>

                    <div className="frame-31">
                      <div className="jpg-8">
                        <div className="rectangle-6" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：月売上3万円
                          </div>

                          <div className="text-wrapper-24">
                            → After：2ヶ月で月売上10万円
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「SNS投稿のコツを掴んだら、問い合わせが
                            <br />
                            一気に増えました！」
                          </div>

                          <div className="text-wrapper-27">
                            →
                            お客様の声を拾って商品説明を改善しただけで、売上が急増！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Bさん（副業ウェブデザイナー）
                    </div>

                    <div className="frame-31">
                      <div className="jpg-9">
                        <div className="rectangle-7" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：クライアント獲得ゼロ
                          </div>

                          <div className="text-wrapper-24">
                            → After：3ヶ月で月収15万円
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「営業メールが苦手でしたが、テンプレートのおかげで成約率が倍に！」
                          </div>

                          <div className="text-wrapper-28">
                            →
                            無理なセールスをしなくても、自然に契約が決まるようになりました！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Cさん（パーソナルコーチ）
                    </div>

                    <div className="frame-31">
                      <div className="jpg-10">
                        <div className="rectangle-7" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：SNS発信をしても反応ゼロ
                          </div>

                          <div className="text-wrapper-29">
                            → After：フォロワー1,000人超え＆受講生10名獲得
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「フォロワーが増えるだけでなく、申し込みが来るようになったのが驚き！」
                          </div>

                          <div className="text-wrapper-28">
                            →
                            ただ投稿するだけだったSNSが、&#34;見込み客を集めるツール&#34;
                            に変わりました！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-29">
                    <div className="text-wrapper-22">
                      Dさん（オンラインスクール運営者）
                    </div>

                    <div className="frame-31">
                      <div className="jpg-11">
                        <div className="rectangle-7" />
                      </div>

                      <div className="frame-32">
                        <div className="frame-30">
                          <div className="text-wrapper-23">
                            Before：無料相談で終わってしまう
                          </div>

                          <div className="text-wrapper-24">
                            → After：成約率40%アップ
                          </div>
                        </div>

                        <div className="frame-30">
                          <div className="text-wrapper-25">【comment】</div>

                          <div className="text-wrapper-26">
                            「価格を伝えるのが怖かったけど、自信を持って提案できるようになった！」
                          </div>

                          <div className="text-wrapper-28">
                            →
                            「お願いします！」と言われる機会が増え、安定した売上を確保！
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-56">
            <div className="small-SUPERIORITY">SUPERIORITY</div>

            <p className="smart-growth-4">
              まずは無料ウェビナーからお気軽にご参加ください。
              <br />
              他社と比較しても、「Smart Growth」は
              <br /> “実践力” と “継続サポート” で圧倒的な強みがあります！
            </p>

            <img className="image-4" alt="Image" src="/img/image-2-2.png" />
          </div>

          <div className="frame-57">
            <div className="frame-58">
              <div className="text-wrapper-30">Smart Growth導入までの流れ</div>

              <div className="text-wrapper-31">FLOW</div>

              <img className="image-5" alt="Image" src="/img/image-3.png" />
            </div>
          </div>

          <div className="frame-59">
            <div className="text-wrapper-32">
              今、この一歩があなたのビジネスを変えます
            </div>

            <div className="text-wrapper-33">
              “成功への最短ルート”を体感し、あなたのビジネスを
              <br />
              たった30日で加速させましょう。
            </div>

            <div className="frame-60">
              <div className="component-2">
                <div className="frame-61">
                  <img className="image-3" alt="Image" src="/img/image.png" />

                  <div className="text-2">無料ウェビナーを申し込む</div>
                </div>
              </div>

              <div className="component-3">
                <div className="text-5">お問い合わせはこちら</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
