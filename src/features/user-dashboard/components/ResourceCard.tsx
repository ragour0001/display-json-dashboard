"use client";

interface ResourceCardProps {
  type: "article" | "podcast" | "video";
  title: string;
  description?: string;
  author?: string;
  date?: string;
  image?: string;
  thumbnail?: string;
  tags?: string[];
  duration?: string;
}

export default function ResourceCard({
  type,
  title,
  description,
  author,
  date,
  image,
  thumbnail,
  tags,
  duration,
}: ResourceCardProps) {
  if (type === "article") {
    return (
      <>
        <style>{`
          .resource-card {
            display: flex;
            border-radius: 12px;
            border: 1px solid #e5e7e9;
            background: #fff;
          }

          .resource-card-article {
            padding: 24px;
            gap: 32px;
          }

          .resource-card-article .card-content {
            display: flex;
            align-items: flex-start;
            gap: 32px;
            align-self: stretch;
          }

          .card-image {
            width: 406px;
            height: 240px;
            border-radius: 8px;
            flex-shrink: 0;
            overflow: hidden;
          }

          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .card-text-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            flex: 1 0 0;
            align-self: stretch;
          }

          .card-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            align-self: stretch;
          }

          .content-type {
            color: #003a5d;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
          }

          .card-title-section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            align-self: stretch;
          }

          .title-with-icon {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            align-self: stretch;
          }

          .card-title {
            flex: 1 0 0;
            color: #181d27;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 32px;
            margin: 0;
          }

          .arrow-icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            padding-top: 4px;
          }

          .card-description {
            align-self: stretch;
            color: #535862;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            margin: 0;
          }

          .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          }

          .author-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .author-avatar {
            display: flex;
            width: 40px;
            height: 40px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 200px;
            overflow: hidden;
          }

          .author-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .author-details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .author-name {
            color: #181d27;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
          }

          .publish-date {
            color: #535862;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }

          .bookmark-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          @media (max-width: 1200px) {
            .resource-card-article .card-content {
              flex-direction: column;
              gap: 20px;
            }
            .card-image {
              width: 100%;
              height: 200px;
            }
          }
        `}</style>
        <div className="resource-card resource-card-article">
          <div className="card-content">
            <div className="card-image">
              <img src={image || "/api/placeholder/406/240"} alt={title} />
            </div>
            <div className="card-text-content">
              <div className="card-header">
                <div className="content-type">Article</div>
                <div className="card-title-section">
                  <div className="title-with-icon">
                    <h3 className="card-title">{title}</h3>
                    <div className="arrow-icon">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                          d="M7 17.25L17 7.25M17 7.25H7M17 7.25V17.25"
                          stroke="#181D27"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="card-description">{description}</p>
                </div>
              </div>
              <div className="card-footer">
                <div className="author-info">
                  <div className="author-avatar">
                    <img src="/api/placeholder/40/40" alt={author} />
                  </div>
                  <div className="author-details">
                    <div className="author-name">{author}</div>
                    <div className="publish-date">{date}</div>
                  </div>
                </div>
                <div className="bookmark-icon">
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none">
                    <path
                      d="M0.167969 28.9999V3.58323C0.167969 2.8724 0.423385 2.26017 0.934219 1.74656C1.44505 1.23323 2.05866 0.976562 2.77505 0.976562H13.2771V3.07031H2.77505C2.64672 3.07031 2.52908 3.12378 2.42214 3.23073C2.31547 3.33767 2.26214 3.45517 2.26214 3.58323V25.7928L11.0013 22.0682L19.7405 25.7928V13.0703H21.8346V28.9999L11.0013 24.3524L0.167969 28.9999ZM19.7405 10.1432V6.60656H16.2042V4.51281H19.7405V0.976562H21.8346V4.51281H25.3709V6.60656H21.8346V10.1432H19.7405Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (type === "podcast") {
    return (
      <>
        <style>{`
          .resource-card {
            display: flex;
            border-radius: 12px;
            border: 1px solid #e5e7e9;
            background: #fff;
          }

          .resource-card-podcast {
            padding: 24px;
            gap: 32px;
          }

          .resource-card-podcast .card-content {
            display: flex;
            align-items: flex-start;
            gap: 32px;
            align-self: stretch;
          }

          .podcast-image {
            width: 230px;
            align-self: stretch;
            flex-shrink: 0;
          }

          .podcast-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }

          .resource-card-podcast .card-text-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 32px;
            flex: 1 0 0;
          }

          .resource-card-podcast .card-header {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 12px;
            align-self: stretch;
          }

          .podcast-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          }

          .content-type {
            color: #003a5d;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
          }

          .more-menu {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .card-title {
            color: #181d27;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 32px;
            margin: 0;
          }

          .podcast-tags {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .podcast-tag {
            display: flex;
            padding: 5px 12px;
            align-items: flex-start;
            border-radius: 31px;
            background: #f7f7f8;
            color: #878b8c;
            font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }

          .podcast-player {
            display: flex;
            align-items: center;
            gap: 17px;
          }

          .play-button {
            display: flex;
            padding: 2px 16px 2px 4px;
            align-items: center;
            gap: 6px;
            border-radius: 40px;
            background: #f0f0f0;
          }

          .duration {
            color: #0f3443;
            font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }

          @media (max-width: 1200px) {
            .resource-card-podcast .card-content {
              flex-direction: column;
              gap: 20px;
            }
            .podcast-image {
              width: 100%;
              max-width: 300px;
              align-self: center;
            }
          }
        `}</style>
        <div className="resource-card resource-card-podcast">
          <div className="card-content">
            <div className="podcast-image">
              <img src="/api/placeholder/230/200" alt={title} />
            </div>
            <div className="card-text-content">
              <div className="card-header">
                <div className="podcast-header">
                  <div className="content-type">Podcast</div>
                  <div className="more-menu">
                    <svg width="4" height="25" viewBox="0 0 4 25" fill="none">
                      <path
                        d="M1.99526 24.3656C1.48665 24.3656 1.05234 24.1845 0.692343 23.8223C0.332343 23.46 0.152344 23.0246 0.152344 22.516C0.152344 22.0074 0.333455 21.5713 0.695677 21.2077C1.0579 20.8444 1.49332 20.6627 2.00193 20.6627C2.51054 20.6627 2.94484 20.8449 3.30484 21.2094C3.66484 21.5735 3.84484 22.0116 3.84484 22.5235C3.84484 23.0321 3.66373 23.4663 3.30151 23.826C2.93929 24.1857 2.50387 24.3656 1.99526 24.3656ZM1.99526 14.0964C1.48665 14.0964 1.05234 13.9153 0.692343 13.5531C0.332343 13.1909 0.152344 12.7555 0.152344 12.2469C0.152344 11.7382 0.333455 11.3039 0.695677 10.9439C1.0579 10.5839 1.49332 10.4039 2.00193 10.4039C2.51054 10.4039 2.94484 10.585 3.30484 10.9473C3.66484 11.3095 3.84484 11.7449 3.84484 12.2535C3.84484 12.7621 3.66373 13.1964 3.30151 13.5564C2.93929 13.9164 2.50387 14.0964 1.99526 14.0964ZM1.99526 3.83768C1.48665 3.83768 1.05234 3.65546 0.692343 3.29102C0.332343 2.92685 0.152344 2.48879 0.152344 1.97685C0.152344 1.46824 0.333455 1.03407 0.695677 0.674349C1.0579 0.314627 1.49332 0.134766 2.00193 0.134766C2.51054 0.134766 2.94484 0.315878 3.30484 0.678101C3.66484 1.04032 3.84484 1.47574 3.84484 1.98435C3.84484 2.49296 3.66373 2.92907 3.30151 3.29268C2.93929 3.65602 2.50387 3.83768 1.99526 3.83768Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="card-title">{title}</h3>
                {tags && (
                  <div className="podcast-tags">
                    {tags.map((tag, index) => (
                      <div key={index} className="podcast-tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="podcast-player">
                <div className="play-button">
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path
                      d="M12.3134 22.7773L22.5292 16.2493L12.3134 9.72143V22.7773ZM16.0042 32.0827C13.8256 32.0827 11.7746 31.6671 9.8513 30.836C7.92797 30.0049 6.24894 28.8724 4.81422 27.4385C3.37977 26.0043 2.24672 24.326 1.41505 22.4035C0.583663 20.481 0.167969 18.4306 0.167969 16.2523C0.167969 14.0623 0.583524 12.0038 1.41464 10.0768C2.24575 8.1499 3.37825 6.47379 4.81214 5.04852C6.2463 3.62324 7.92464 2.49477 9.84714 1.6631C11.7696 0.83171 13.8201 0.416016 15.9984 0.416016C18.1884 0.416016 20.2469 0.83157 22.1738 1.66268C24.1007 2.49379 25.7769 3.62171 27.2021 5.04643C28.6274 6.47115 29.7559 8.14657 30.5876 10.0727C31.4189 11.9988 31.8346 14.0567 31.8346 16.2464C31.8346 18.425 31.4191 20.476 30.588 22.3993C29.7569 24.3227 28.6289 26.0017 27.2042 27.4364C25.7795 28.8709 24.1041 30.0039 22.178 30.8356C20.2519 31.667 18.1939 32.0827 16.0042 32.0827Z"
                      fill="#006B5F"
                    />
                  </svg>
                </div>
                <span className="duration">{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (type === "video") {
    return (
      <>
        <style>{`
          .resource-card {
            display: flex;
            border-radius: 12px;
            border: 1px solid #e5e7e9;
            background: #fff;
          }

          .resource-card-video {
            padding: 24px;
            gap: 32px;
          }

          .video-thumbnail {
            position: relative;
            display: flex;
            height: 240px;
            padding: 66px 0px 65px 0px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
            border-radius: 8px;
            overflow: hidden;
          }

          .video-thumbnail img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .video-play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.3);
          }

          .video-play-button {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .resource-card-video .card-text-content {
            display: flex;
            height: 198px;
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
            align-self: stretch;
          }

          .video-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          }

          .content-type {
            color: #003a5d;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
          }

          .more-menu {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .card-title {
            color: #181d27;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 32px;
            margin: 0;
          }

          .card-description {
            color: #535862;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            margin: 0;
          }

          .card-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            align-self: stretch;
          }

          .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          }

          .author-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .author-avatar {
            display: flex;
            width: 40px;
            height: 40px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 200px;
            overflow: hidden;
          }

          .author-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .author-details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .author-name {
            color: #181d27;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
          }

          .publish-date {
            color: #535862;
            font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }
        `}</style>
        <div className="resource-card resource-card-video">
          <div className="video-thumbnail">
            <img src={thumbnail || "/api/placeholder/1029/240"} alt={title} />
            <div className="video-play-overlay">
              <div className="video-play-button">
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none">
                  <path
                    d="M14.5 8.5L0.5 16.5622L0.5 0.437822L14.5 8.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="card-text-content">
            <div className="card-header">
              <div className="video-header">
                <div className="content-type">Video</div>
                <div className="more-menu">
                  <svg width="4" height="25" viewBox="0 0 4 25" fill="none">
                    <path
                      d="M1.99526 24.3656C1.48665 24.3656 1.05234 24.1845 0.692343 23.8223C0.332343 23.46 0.152344 23.0246 0.152344 22.516C0.152344 22.0074 0.333455 21.5713 0.695677 21.2077C1.0579 20.8444 1.49332 20.6627 2.00193 20.6627C2.51054 20.6627 2.94484 20.8449 3.30484 21.2094C3.66484 21.5735 3.84484 22.0116 3.84484 22.5235C3.84484 23.0321 3.66373 23.4663 3.30151 23.826C2.93929 24.1857 2.50387 24.3656 1.99526 24.3656ZM1.99526 14.0964C1.48665 14.0964 1.05234 13.9153 0.692343 13.5531C0.332343 13.1909 0.152344 12.7555 0.152344 12.2469C0.152344 11.7382 0.333455 11.3039 0.695677 10.9439C1.0579 10.5839 1.49332 10.4039 2.00193 10.4039C2.51054 10.4039 2.94484 10.585 3.30484 10.9473C3.66484 11.3095 3.84484 11.7449 3.84484 12.2535C3.84484 12.7621 3.66373 13.1964 3.30151 13.5564C2.93929 13.9164 2.50387 14.0964 1.99526 14.0964ZM1.99526 3.83768C1.48665 3.83768 1.05234 3.65546 0.692343 3.29102C0.332343 2.92685 0.152344 2.48879 0.152344 1.97685C0.152344 1.46824 0.333455 1.03407 0.695677 0.674349C1.0579 0.314627 1.49332 0.134766 2.00193 0.134766C2.51054 0.134766 2.94484 0.315878 3.30484 0.678101C3.66484 1.04032 3.84484 1.47574 3.84484 1.98435C3.84484 2.49296 3.66373 2.92907 3.30151 3.29268C2.93929 3.65602 2.50387 3.83768 1.99526 3.83768Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
            </div>
            <div className="card-footer">
              <div className="author-info">
                <div className="author-avatar">
                  <img src="/api/placeholder/40/40" alt={author} />
                </div>
                <div className="author-details">
                  <div className="author-name">{author}</div>
                  <div className="publish-date">{date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
